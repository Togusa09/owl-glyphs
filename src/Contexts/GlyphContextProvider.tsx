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
  switch (action.type) {
    case "AddRing": {
      const rings = glyphs.rings ?? [];
      const newId =
        rings.length > 0 ? Math.max(...rings.map((x) => x.id)) + 1 : 1;

      return {
        ...glyphs,
        rings: [
          ...rings,
          {
            id: newId,
            nodes: [],
            offset: 0,
          },
        ],
      };
    }
    case "DeleteRing": {
      return {
        ...glyphs,
        rings: glyphs.rings?.filter((ring) => ring.id !== action.ringId),
      };
    }
    case "Load": {
      return action.model;
    }
    case "AddNode": {
      const nodes = glyphs.rings!.find((x) => x.id === action.ringId)!.nodes;
      const newId: number =
        nodes.length > 0 ? Math.max(...nodes.map((x) => x.id)) + 1 : 1;
      return {
        ...glyphs,
        rings: glyphs.rings!.map((ring) => ({
          ...ring,
          nodes:
            ring.id !== action.ringId
              ? ring.nodes
              : [...ring.nodes, { id: newId, type: action.glyphType }],
        })),
      };
    }
    case "UpdateNode": {
      return {
        ...glyphs,
        rings: glyphs.rings?.map((ring) => {
          return {
            ...ring,
            nodes: ring.nodes.map((node) => {
              if (node.id === action.glyphId && ring.id === action.ringId) {
                return { ...node, type: action.glyphType };
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
        rings: glyphs.rings?.map((ring) => {
          return {
            ...ring,
            nodes: ring.nodes.filter(
              (node) =>
                !(node.id === action.glyphId && ring.id === action.ringId)
            ),
          };
        }),
      };
    }
    case "UpdateCenter": {
      return {
        ...glyphs,
        centerGlyph: {
          ...glyphs.centerGlyph!,
          type: action.glyphType,
        },
      };
    }
    case "UpdateRing": {
      return {
        ...glyphs,
        rings: glyphs.rings?.map((ring) => {
          if (ring.id !== action.ringId) {
            return ring;
          }

          return {...action.ring};
        }),
      };
    }
    case "UpdateName": {
      return {
        ...glyphs,
        name: action.name,
      };
    }
    default:
      return glyphs;
  }
}
