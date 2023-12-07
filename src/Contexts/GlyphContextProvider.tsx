import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { TestGlyph } from "../Data/GlyphDefinitions";
import {
  GlyphArrangementModel,
  GlyphRingModel,
} from "../Models/GlyphCollection";
import { GlyphType } from "../Models/GlyphType";

type GlyphContextType = {
  glyphArrangement: GlyphArrangementModel;
  loadGlyphs: (model: GlyphArrangementModel) => void;
  addRing: () => void;
  deleteRing: (ringId: number) => void;
  updateRing: (ringId: number, ring: GlyphRingModel) => void;
  addNode: (ringId: number, glyphType: GlyphType) => void;
  deleteNode: (ringId: number, glyphId: number) => void;
  updateNode: (ringId: number, glyphId: number, glyphType: GlyphType) => void;
  updateCenterNode: (glyphType: GlyphType) => void;
  updateName: (name: string) => void;
};

export const CustomOrderContext = createContext<string | null>(null);

export const GlyphContext = createContext<GlyphContextType | null>(null);

type GlyphContextProviderProps = {
  children: ReactNode;
};

export default function GlyphContextProvider({
  children,
}: GlyphContextProviderProps) {
  const [glyphArrangement, dispatchGlyphs] = useReducer(
    glyphsReducer,
    TestGlyph
  );

  const value = useMemo(() => {
    const loadGlyphs = (glyphs: GlyphArrangementModel) => {
      dispatchGlyphs({ type: "Load", model: glyphs });
    };
    const addRing = () => {
      dispatchGlyphs({ type: "AddRing" });
    };
    const deleteRing = (ringId: number) => {
      dispatchGlyphs({ type: "DeleteRing", ringId });
    };
    const updateRing = (ringId: number, ring: GlyphRingModel) => {
      dispatchGlyphs({ type: "UpdateRing", ringId, ring });
    };
    const addNode = (ringId: number, glyphType: GlyphType) => {
      dispatchGlyphs({ type: "AddNode", ringId, glyphType });
    };
    const updateNode = (
      ringId: number,
      glyphId: number,
      glyphType: GlyphType
    ) => {
      dispatchGlyphs({ type: "UpdateNode", ringId, glyphId, glyphType });
    };
    const deleteNode = (ringId: number, glyphId: number) => {
      dispatchGlyphs({ type: "DeleteNode", ringId, glyphId });
    };
    const updateCenterNode = (glyphType: GlyphType) => {
      dispatchGlyphs({ type: "UpdateCenter", glyphType });
    };
    const updateName = (name: string) => {
      dispatchGlyphs({ type: "UpdateName", name });
    };

    return {
      glyphArrangement,
      loadGlyphs,
      addRing,
      deleteRing,
      updateRing,
      addNode,
      updateNode,
      deleteNode,
      updateCenterNode,
      updateName,
    };
  }, [glyphArrangement]);

  return (
    <GlyphContext.Provider value={value}>{children}</GlyphContext.Provider>
  );
}

export function useGlyphContext() {
  const context = useContext(GlyphContext);
  if (!context) {
    throw new Error(
      "useGlyphContext() must be used within a <GlyphContextProvider>"
    );
  }
  return context;
}

type GlyphReducerActionModel =
  | { type: "UpdateName"; name: string }
  | {
      type: "DeleteRing";
      ringId: number;
    }
  | {
      type: "AddRing";
    }
  | {
      type: "UpdateRing";
      ringId: number;
      ring: GlyphRingModel;
    }
  | {
      type: "AddNode";
      ringId: number;
      glyphType: GlyphType;
    }
  | {
      type: "DeleteNode";
      ringId: number;
      glyphId: number;
    }
  | {
      type: "UpdateNode";
      ringId: number;
      glyphId: number;
      glyphType: GlyphType;
    }
  | {
      type: "UpdateCenter";
      glyphType: GlyphType;
    }
  | {
      type: "Load";
      model: GlyphArrangementModel;
    };

function glyphsReducer(
  glyphs: GlyphArrangementModel,
  action: GlyphReducerActionModel
): GlyphArrangementModel {
  console.log(action);

  switch (action.type) {
    case "AddRing": {
      const rings = glyphs.Rings ?? [];
      const newId =
        rings.length > 0 ? Math.max(...rings.map((x) => x.Id)) + 1 : 1;

      return {
        ...glyphs,
        Rings: [
          ...rings,
          {
            Id: newId,
            Nodes: [],
            Offset: 0,
          },
        ],
      };
    }
    case "DeleteRing": {
      return {
        ...glyphs,
        Rings: glyphs.Rings?.filter((ring) => ring.Id !== action.ringId),
      };
    }
    case "Load": {
      return action.model;
    }
    case "AddNode": {
      const nodes = glyphs.Rings!.find((x) => x.Id === action.ringId)!.Nodes;
      const newId: number =
        nodes.length > 0 ? Math.max(...nodes.map((x) => x.Id)) + 1 : 1;
      return {
        ...glyphs,
        Rings: glyphs.Rings!.map((ring) => ({
          ...ring,
          Nodes:
            ring.Id !== action.ringId
              ? ring.Nodes
              : [...ring.Nodes, { Id: newId, Type: action.glyphType }],
        })),
      };
    }
    case "UpdateNode": {
      return {
        ...glyphs,
        Rings: glyphs.Rings?.map((ring) => {
          return {
            ...ring,
            Nodes: ring.Nodes.map((node) => {
              if (node.Id === action.glyphId && ring.Id === action.ringId) {
                return { ...node, Type: action.glyphType };
              }
              return node;
            }),
          };
        }),
      };
    }
    case "DeleteNode": {
      return {
        ...glyphs,
        Rings: glyphs.Rings?.map((ring) => {
          return {
            ...ring,
            Nodes: ring.Nodes.filter(
              (node) =>
                !(node.Id === action.glyphId && ring.Id === action.ringId)
            ),
          };
        }),
      };
    }
    case "UpdateCenter": {
      return {
        ...glyphs,
        CenterGlyph: {
          ...glyphs.CenterGlyph!,
          Type: action.glyphType,
        },
      };
    }
    case "UpdateRing": {
      return {
        ...glyphs,
        Rings: glyphs.Rings?.map((ring) => {
          if (ring.Id !== action.ringId) return ring;

          return {
            ...ring,
          };
        }),
      };
    }
    case "UpdateName": {
      return {
        ...glyphs,
        Name: action.name,
      };
    }
    default:
      return glyphs;
  }
}
