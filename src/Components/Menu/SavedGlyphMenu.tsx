import { useGlyphContext } from "../../Contexts/GlyphContextProvider";
import {
  Invisibility,
  SleepMist,
  TestGlyph,
  SafetyHover,
} from "../../Data/GlyphDefinitions";
import Button from "@mui/material/Button";

export const SavedGlyphMenu = () => {
  const { loadGlyphs } = useGlyphContext();

  return (
    <div className="save-glyph-menu">
      <Button onClick={() => loadGlyphs(Invisibility)}>Invisibility</Button>
      <Button onClick={() => loadGlyphs(SleepMist)}>Sleep Mist</Button>
      <Button onClick={() => loadGlyphs(SafetyHover)}>Safety Hover</Button>
      <Button onClick={() => loadGlyphs(TestGlyph)}>Test Glyph</Button>
    </div>
  );
};

export default SavedGlyphMenu;
