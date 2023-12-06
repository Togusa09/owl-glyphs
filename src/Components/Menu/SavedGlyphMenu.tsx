import { useGlyphContext } from "../../Contexts/GlyphContextProvider";
import {
  Invisibility,
  SleepMist,
  TestGlyph,
  SafetyHover,
} from "../../Data/GlyphDefinitions";
import Button from "@mui/material/Button";
import { GlyphArrangementModel } from "../../Models/GlyphCollection";
import useLocalStorage from "../../Hooks/useLocalStorage";

export const SavedGlyphMenu = () => {
  const { loadGlyphs } = useGlyphContext();

  const [savedGlyphs, updateSavedGlyphs] = useLocalStorage<
    GlyphArrangementModel[]
  >("SavedGlyphs", [Invisibility, SleepMist, SafetyHover, TestGlyph]);

  return (
    <div className="save-glyph-menu">
      {savedGlyphs.map((g) => (<Button onClick={() => loadGlyphs(g)}>{g.Name}</Button>))}
      {/* <Button onClick={() => loadGlyphs(Invisibility)}>Invisibility</Button>
      <Button onClick={() => loadGlyphs(SleepMist)}>Sleep Mist</Button>
      <Button onClick={() => loadGlyphs(SafetyHover)}>Safety Hover</Button>
      <Button onClick={() => loadGlyphs(TestGlyph)}>Test Glyph</Button> */}
    </div>
  );
};

export default SavedGlyphMenu;
