import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { GlyphArrangementModel } from "../../Models/GlyphCollection";

export interface LoadingGlyphDialogProps {
  open: boolean;
  savedGlyphs: GlyphArrangementModel[];
  onClose: (value: string | null) => void;
}

export default function LoadingGlyphDialog({
  open,
  savedGlyphs,
  onClose,
}: LoadingGlyphDialogProps) {
  return (
    <Dialog onClose={() => onClose(null)} open={open}>
      <DialogTitle>Load Glyph</DialogTitle>
      <List>
        {savedGlyphs.map((glyph) => {
          return (
            <ListItem disableGutters key={glyph.name}>
              <ListItemButton onClick={() => onClose(glyph.name)}>
                <ListItemText primary={glyph.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Dialog>
  );
}
