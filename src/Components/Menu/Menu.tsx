import { Box } from "@mui/material";
import SavedGlyphMenu from "./SavedGlyphMenu";
import GlyphEditor from "./GlyphEditor";

export const Menu = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
        maxWidth: 400,
      }}
    >
      <SavedGlyphMenu />
      <GlyphEditor />
    </Box>
  );
};

export default Menu;
