import { Button, Grid, TextField } from "@mui/material"
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

    <Grid item xs={4} sx={editorRow}>
        Ring {index}
    </Grid>
    <Grid item xs={4} sx={editorRow} >
        <TextField 
            type="number" 
            value={value.Offset} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                //setName(event.target.value);

                onUpdate({
                    ...value,
                    Offset: Number(event.target.value)
                })

              }} />
    </Grid>
    <Grid item xs={4} sx={editorRow} >
        <Button sx={{width:1}} variant="contained" onClick={() => onRemove(value.Id)}>Remove</Button>
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
    <Grid item xs={8} sx={editorRow} />
    <Grid item xs={4} sx={editorRow}>
        <Button 
            variant="contained"
            sx={{width:1}} 
            onClick={() => {
                const newId = value.Nodes.length > 0
                    ? Math.max(...value.Nodes.map(x => x.Id)) + 1
                    : 1
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