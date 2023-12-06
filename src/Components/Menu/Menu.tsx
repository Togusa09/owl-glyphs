import { Box } from "@mui/material"
import SavedGlyphMenu from "./SavedGlyphMenu"
import GlyphEditor from "./GlyphEditor"
import { useGlyphContext } from "../../Contexts/GlyphContextProvider"

export const Menu = () => {
    const { glyphArrangement, setGlyphArrangement } = useGlyphContext();

    return (<Box  sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
        maxWidth: 400
      }}>
        <SavedGlyphMenu onGlyphLoaded={(g) => setGlyphArrangement(g)}></SavedGlyphMenu>
        <GlyphEditor
            glyphs={glyphArrangement} 
            onUpdate={g => 
            { 
                setGlyphArrangement(g)}
            } />
    </Box>)
}

export default Menu