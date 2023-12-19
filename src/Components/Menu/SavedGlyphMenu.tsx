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
import { useState } from "react";
import LoadingGlyphDialog from "./LoadingGlyphDialog";

export const SavedGlyphMenu = () => {
  const { glyphArrangement, loadGlyphs } = useGlyphContext();

  const [savedGlyphs, updateSavedGlyphs] = useLocalStorage<
    GlyphArrangementModel[]
  >("SavedGlyphs", [Invisibility, SleepMist, SafetyHover, TestGlyph]);
  
  const [dialogueOpen, setDialogueOpen] = useState(false);

  function saveGlyph() {
    updateSavedGlyphs([...savedGlyphs, glyphArrangement]);
  }

  function removeGlyph() {
    updateSavedGlyphs(
      savedGlyphs.filter((x) => x.name !== glyphArrangement.name)
    );
    if (saveGlyph.length > 0) {
      loadGlyphs(savedGlyphs[0]);
    }
  }

  function onDialogueClose(name: string | null) {
    setDialogueOpen(false);

    if (!name) {
      return;
    }

    var glyphToLoad = savedGlyphs.find((x) => x.name === name);
    if (glyphToLoad) {
      loadGlyphs(glyphToLoad);
    }
  }

  function canSave() {
    const glyphToReplace = savedGlyphs.find(
      (x) => x.name === glyphArrangement.name
    );
    return glyphToReplace ? glyphToReplace.editable : true;
  }

  return (
    <>
      <Button onClick={() => setDialogueOpen(true)}>Load</Button>
      <LoadingGlyphDialog
        open={dialogueOpen}
        savedGlyphs={savedGlyphs}
        onClose={onDialogueClose}
      />
      <Button onClick={() => saveGlyph()} disabled={!canSave()}>
        Save
      </Button>
      <Button onClick={() => removeGlyph()} disabled={!canSave()}>
        Delete
      </Button>
    </>
  );
};

export default SavedGlyphMenu;
