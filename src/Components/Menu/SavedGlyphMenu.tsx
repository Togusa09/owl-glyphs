import { useGlyphContext } from "../../Contexts/GlyphContextProvider";
import {
  Invisibility,
  SleepMist,
  TestGlyph,
  SafetyHover,
} from "../../Data/GlyphDefinitions";
import Button from "@mui/material/Button";

export const SavedGlyphMenu = () => {
  const { dispatchGlyphs } = useGlyphContext();

  return (
    <div className="save-glyph-menu">
      <Button
        onClick={() => dispatchGlyphs({ type: "Load", model: Invisibility })}
      >
        Invisibility
      </Button>
      <Button
        onClick={() => dispatchGlyphs({ type: "Load", model: SleepMist })}
      >
        Sleep Mist
      </Button>
      <Button
        onClick={() => dispatchGlyphs({ type: "Load", model: SafetyHover })}
      >
        Safety Hover
      </Button>
      <Button
        onClick={() => dispatchGlyphs({ type: "Load", model: TestGlyph })}
      >
        Test Glyph
      </Button>
    </div>
  );
};

export default SavedGlyphMenu;
