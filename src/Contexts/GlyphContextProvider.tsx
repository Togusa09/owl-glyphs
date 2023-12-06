import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { TestGlyph } from "../Data/GlyphDefinitions";
import { GlyphArrangementModel } from "../Models/GlyphCollection";

type GlyphContextType = {
  glyphArrangement: GlyphArrangementModel;
  setGlyphArrangement: Dispatch<React.SetStateAction<GlyphArrangementModel>>;
};

export const CustomOrderContext = createContext<string | null>(null);

export const GlyphContext = createContext<GlyphContextType | null>(null);

type GlyphContextProviderProps = {
  children: ReactNode;
};

export default function GlyphContextProvider({
  children,
}: GlyphContextProviderProps) {
  const [glyphArrangement, setGlyphArrangement] = useState(TestGlyph);

  const value = useMemo(
    () => ({
      glyphArrangement,
      setGlyphArrangement,
    }),
    [glyphArrangement, setGlyphArrangement]
  );

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
