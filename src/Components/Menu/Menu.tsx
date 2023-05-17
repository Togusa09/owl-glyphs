import { Box } from "@mui/material"
import { GlyphCollectionModel } from "../../Models/GlyphCollection"
import SavedGlyphMenu from "./SavedGlyphMenu"
import GlyphEditor from "./GlyphEditor"

type Props = {
    loadGlyph: (gc: GlyphCollectionModel) => void
    currentGlyph: GlyphCollectionModel
}

export const Menu = (props: Props) => {
    return (<Box  sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
        height: '80vh'
      }}>
        <SavedGlyphMenu loadGlyph={(g) => props.loadGlyph(g)}></SavedGlyphMenu>
        <GlyphEditor glyphs={props.currentGlyph} onUpdate={g => 
           { console.log(JSON.stringify(g))
            props.loadGlyph(g)}
            } ></GlyphEditor>
    </Box>)
}

export default Menu