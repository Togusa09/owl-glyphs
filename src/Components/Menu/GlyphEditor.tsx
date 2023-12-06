import { Button, Grid } from "@mui/material";
import { GlyphType } from "../../Models/GlyphType";
import GlyphSelector from "./GlyphSelector";
import { GlyphRingEditor } from "./GlyphRingEditor";
import { useGlyphContext } from "../../Contexts/GlyphContextProvider";

export const editorRow = {
  height: "4em",
  alignItems: "center",
  display: "flex",
};

export const GlyphEditor = () => {
  const {
    glyphArrangement,
    addRing,
    deleteRing,
    updateRing,
    addNode,
    deleteNode,
    updateNode,
    updateCenterNode,
  } = useGlyphContext();
  var centerGlyph = glyphArrangement.CenterGlyph ?? { Type: GlyphType.Blank };

  return (
    <>
      <Grid container spacing={1} sx={{ alignItems: "center" }}>
        <Grid item xs={4} sx={editorRow}>
          Center glyph
        </Grid>
        <Grid item xs={4} sx={editorRow}>
          <GlyphSelector
            value={centerGlyph.Type}
            onChange={updateCenterNode}
          ></GlyphSelector>
        </Grid>
        <Grid item xs={4} sx={editorRow} />
        {glyphArrangement.Rings &&
          glyphArrangement.Rings.map((r, ri) => {
            return (
              <GlyphRingEditor
                value={r}
                index={ri}
                onUpdate={(updatedRing) =>
                  updateRing(r.Id, updatedRing)
                }
                onAddNode={(glyphType) => addNode(r.Id, glyphType)}
                onRemoveNode={(glyphId) => deleteNode(r.Id, glyphId)}
                onUpdateNode={(glyphId, glyphType) =>
                  updateNode(r.Id, glyphId, glyphType)
                }
                onRemove={() => deleteRing(r.Id)}
              />
            );
          })}
        <Grid item xs={8} sx={editorRow} />
        <Grid item xs={4} sx={editorRow}>
          <Button variant="contained" sx={{ width: 1 }} onClick={addRing}>
            Add Ring
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default GlyphEditor;
