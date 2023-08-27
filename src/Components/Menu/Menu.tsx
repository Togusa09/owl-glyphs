import { Box } from "@mui/material"
import { GlyphCollectionModel } from "../../Models/GlyphCollection"
import SavedGlyphMenu from "./SavedGlyphMenu"
import GlyphEditor from "./GlyphEditor"

type Props = {
    onGlyphUpdated: (gc: GlyphCollectionModel) => void
    currentGlyph: GlyphCollectionModel
}

export const Menu = ({onGlyphUpdated, currentGlyph}: Props) => {
    return (<Box  sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
        maxWidth: 400
        // height: '80vh'
      }}>
        <SavedGlyphMenu onGlyphLoaded={(g) => onGlyphUpdated(g)}></SavedGlyphMenu>
        <GlyphEditor
            glyphs={currentGlyph} 
            onUpdate={g => 
            { 
                onGlyphUpdated(g)}
            } />
    </Box>)
}

export default Menu