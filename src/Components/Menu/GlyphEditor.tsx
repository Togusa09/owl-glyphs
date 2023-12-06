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
  const { glyphArrangement, dispatchGlyphs } = useGlyphContext();
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
            onChange={(g) => {
              dispatchGlyphs({ type: "UpdateCenter", glyphType: g });
            }}
          ></GlyphSelector>
        </Grid>
        <Grid item xs={4} sx={editorRow} />
        {glyphArrangement.Rings &&
          glyphArrangement.Rings.map((r, ri) => {
            return (
              <GlyphRingEditor
                value={r}
                index={ri}
                onUpdate={() => dispatchGlyphs({type: "UpdateRing", ringId: r.Id})}
                onAddNode={(glyphType) => dispatchGlyphs({type: "AddNode", ringId: r.Id, glyphType})}
                onRemoveNode={(glyphId) =>
                  dispatchGlyphs({ type: "DeleteNode", ringId: r.Id, glyphId })
                }
                onUpdateNode={(glyphId, glyphType) =>
                  dispatchGlyphs({
                    type: "UpdateNode",
                    ringId: r.Id,
                    glyphId,
                    glyphType,
                  })
                }
                onRemove={() =>
                  dispatchGlyphs({
                    type: "DeleteRing",
                    ringId: r.Id,
                  })
                }
              />
            );
          })}
        <Grid item xs={8} sx={editorRow} />
        <Grid item xs={4} sx={editorRow}>
          <Button
            variant="contained"
            sx={{ width: 1 }}
            onClick={() =>
              dispatchGlyphs({
                type: "AddRing",
              })
            }
          >
            Add Ring
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default GlyphEditor;
