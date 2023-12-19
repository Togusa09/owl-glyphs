import { Button, Grid, TextField } from "@mui/material";
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
    updateName,
  } = useGlyphContext();
  var centerGlyph = glyphArrangement.centerGlyph ?? { type: GlyphType.Blank };

  return (
    <>
      <Grid container spacing={1} sx={{ alignItems: "center" }}>
        <Grid item xs={4} sx={editorRow}>
          Name
        </Grid>
        <Grid item xs={8} sx={editorRow}>
          <TextField
            fullWidth
            value={glyphArrangement.name}
            onChange={(e) => updateName(e.target.value)}
          />
        </Grid>
        <Grid item xs={4} sx={editorRow}>
          Center glyph
        </Grid>
        <Grid item xs={4} sx={editorRow}>
          <GlyphSelector
            value={centerGlyph.type}
            onChange={updateCenterNode}
          ></GlyphSelector>
        </Grid>
        <Grid item xs={4} sx={editorRow} />
        {glyphArrangement.rings &&
          glyphArrangement.rings.map((r, ri) => {
            return (
              <GlyphRingEditor
                value={r}
                key={r.id}
                index={ri}
                onUpdate={(updatedRing) => updateRing(r.id, updatedRing)}
                onAddNode={(glyphType) => addNode(r.id, glyphType)}
                onRemoveNode={(glyphId) => deleteNode(r.id, glyphId)}
                onUpdateNode={(glyphId, glyphType) =>
                  updateNode(r.id, glyphId, glyphType)
                }
                onRemove={() => deleteRing(r.id)}
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
