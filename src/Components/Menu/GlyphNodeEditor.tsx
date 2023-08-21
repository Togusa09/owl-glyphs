import { Fragment } from "react"
import { GlyphNodeModel } from "../../Models/GlyphCollection"
import { editorRow } from "./GlyphEditor"
import { Button, Grid } from "@mui/material"
import GlyphSelector from "./GlyphSelector"

type GlyphNodeEditorProps = {
    value: GlyphNodeModel
    onUpdate: (val: GlyphNodeModel) => void
    onRemove: (id: number) => void
}

export const GlyphNodeEditor = ({value, onUpdate, onRemove}: GlyphNodeEditorProps) => (<Fragment key={value.Id}>
    <Grid item xs={4} sx={editorRow}></Grid>
    <Grid item xs={4} sx={editorRow}>
        <GlyphSelector value={value.Type} 
        onChange={(glyph) => 
            onUpdate({ ...value, Type: glyph })
        } />
    </Grid>
    <Grid item xs={4} sx={{...editorRow}}>
        <Button variant="contained" onClick={() => onRemove(value.Id)}>Remove</Button>
    </Grid>
</Fragment>)