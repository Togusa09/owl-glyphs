import { Button, Grid } from "@mui/material"
import { GlyphRingModel } from "../../Models/GlyphCollection"
import { editorRow } from "./GlyphEditor"
import { GlyphNodeEditor } from "./GlyphNodeEditor"
import { Fragment } from "react"
import { GlyphType } from "../../Models/GlyphType"

type GlyphRingEditorProps = {
    value: GlyphRingModel
    index: number
    onUpdate: (val: GlyphRingModel) => void
    onRemove: (id: number) => void
}

export const GlyphRingEditor = ({value, index, onUpdate, onRemove}: GlyphRingEditorProps) => (
<Fragment key={value.Id}>
    <Grid item xs={2} sx={editorRow} />
    <Grid item xs={2} sx={editorRow}>
        Ring {index}
    </Grid>
    <Grid item xs={8} sx={editorRow} >
        <Button variant="contained">Remove</Button>
    </Grid>
    {value.Nodes.map((n) => {
        return <GlyphNodeEditor value={n} 
            onUpdate={(updatedGlyph) => {
                onUpdate({
                    ...value,
                    Nodes: value.Nodes.map(node => {
                        if (node.Id !== updatedGlyph.Id) {
                            return node
                        }

                        return updatedGlyph
                    })
                })
            }}
       
            onRemove={(id) => {
                onUpdate({
                    ...value,
                    Nodes: value.Nodes.filter(node => node.Id !== id)
                })
            }}
        ></GlyphNodeEditor>
    })}
    <Grid item xs={4} sx={editorRow} />
    <Grid item xs={8} sx={editorRow}>
        <Button 
            variant="contained"
            onClick={() => {
                const newId = Math.max(...value.Nodes.map(x => x.Id)) + 1
                onUpdate({
                    ...value,
                    Nodes:  [
                        ...value.Nodes,
                        {
                            Id: newId,
                            Type: GlyphType.Blank
                        }
                    ]
                })
            }}
        >Add Glyph</Button>
    </Grid>
    
</Fragment>)