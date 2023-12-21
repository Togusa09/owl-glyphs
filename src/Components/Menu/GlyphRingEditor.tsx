import { Button, Grid, TextField } from "@mui/material";
import { GlyphRingModel } from "../../Models/GlyphCollection";
import { editorRow } from "./GlyphEditor";
import { GlyphNodeEditor } from "./GlyphNodeEditor";
import { Fragment } from "react";
import { GlyphType } from "../../Models/GlyphType";

type GlyphRingEditorProps = {
  value: GlyphRingModel;
  index: number;
  onAddNode: (glyphType: GlyphType) => void;
  onUpdateNode: (glyphId: number, glyphType: GlyphType) => void;
  onRemoveNode: (glyphId: number) => void;
  onOffsetChange: (offset: number) => void;
  onRemove: () => void;
};

export const GlyphRingEditor = ({
  value,
  index,
  onAddNode,
  onUpdateNode,
  onRemoveNode,
  onOffsetChange,
  onRemove,
}: GlyphRingEditorProps) => (
  <Fragment key={value.id}>
    <Grid item xs={4} sx={editorRow}>
      Ring {index}
    </Grid>
    <Grid item xs={4} sx={editorRow}>
      <TextField
        type="number"
        value={value.offset}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onOffsetChange(Number(event.target.value));
        }}
      />
    </Grid>
    <Grid item xs={4} sx={editorRow}>
      <Button sx={{ width: 1 }} variant="contained" onClick={() => onRemove()}>
        Remove
      </Button>
    </Grid>
    {value.nodes.map((n) => {
      return (
        <GlyphNodeEditor
          value={n}
          key={n.id}
          onUpdate={(updatedGlyph) => {
            onUpdateNode(n.id, updatedGlyph);
          }}
          onRemove={() => onRemoveNode(n.id)}
        ></GlyphNodeEditor>
      );
    })}
    <Grid item xs={8} sx={editorRow} />
    <Grid item xs={4} sx={editorRow}>
      <Button
        variant="contained"
        sx={{ width: 1 }}
        onClick={() => onAddNode(GlyphType.Blank)}
      >
        Add Glyph
      </Button>
    </Grid>
  </Fragment>
);
