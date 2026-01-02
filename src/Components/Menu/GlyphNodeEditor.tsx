import { Fragment } from "react";
import { editorRow } from "./GlyphEditor";
import { Button, Grid } from "@mui/material";
import GlyphSelector from "./GlyphSelector";
import { GlyphType } from "../../Models/GlyphType";
import type { GlyphNodeModel } from "../../Models/GlyphCollection";

type GlyphNodeEditorProps = {
  value: GlyphNodeModel;
  onUpdate: (glyphType: GlyphType) => void;
  onRemove: () => void;
};

export const GlyphNodeEditor = ({
  value,
  onUpdate,
  onRemove,
}: GlyphNodeEditorProps) => (
  <Fragment key={value.id}>
    <Grid item xs={4} sx={editorRow}></Grid>
    <Grid item xs={4} sx={editorRow}>
      <GlyphSelector value={value.type} onChange={(glyph) => onUpdate(glyph)} />
    </Grid>
    <Grid item xs={4} sx={{ ...editorRow }}>
      <Button variant="contained" sx={{ width: 1 }} onClick={() => onRemove()}>
        Remove
      </Button>
    </Grid>
  </Fragment>
);
