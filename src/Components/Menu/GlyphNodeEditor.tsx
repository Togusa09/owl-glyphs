import { Fragment } from "react"
import { GlyphNodeModel } from "../../Models/GlyphCollection"
import { editorRow } from "./GlyphEditor"
import { Button, Grid } from "@mui/material"
import GlyphSelector from "./GlyphSelector"
import { GlyphType } from "../../Models/GlyphType"

type GlyphNodeEditorProps = {
    value: GlyphNodeModel
    onUpdate: (glyphType: GlyphType) => void
    onRemove: () => void
}

export const GlyphNodeEditor = ({value, onUpdate, onRemove}: GlyphNodeEditorProps) => (<Fragment key={value.Id}>
    <Grid item xs={4} sx={editorRow}></Grid>
    <Grid item xs={4} sx={editorRow}>
        <GlyphSelector value={value.Type} 
        onChange={(glyph) => 
            onUpdate(glyph)
        } />
    </Grid>
    <Grid item xs={4} sx={{...editorRow}}>
        <Button variant="contained" sx={{width:1}}  onClick={() => onRemove()}>Remove</Button>
    </Grid>
</Fragment>)