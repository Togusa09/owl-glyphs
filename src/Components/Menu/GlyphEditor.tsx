import { Button, Grid } from "@mui/material"
import { GlyphCollectionModel } from "../../Models/GlyphCollection"
import { GlyphType } from "../../Models/GlyphType"
import GlyphSelector from "./GlyphSelector"
import { GlyphRingEditor } from "./GlyphRingEditor"

export const editorRow = {
    height: "4em",
    alignItems: "center",
     display:"flex"
}

type Props = {
    glyphs: GlyphCollectionModel
    onUpdate: (val: GlyphCollectionModel) => void
}

export const GlyphEditor = ({glyphs, onUpdate}: Props) => {
    const updateCenterVal = (val: GlyphType) => {
        const updatedModel = {
            ...glyphs,
            CenterGlyph: {
                ...(glyphs.CenterGlyph!),
                Type: val
            }
        }
        onUpdate(updatedModel)
    }

    var centerGlyph = glyphs.CenterGlyph ?? { Type:  GlyphType.Blank}

    return (<>
        <Grid container spacing={1} sx={{ alignItems: "center" }}>
            <Grid item xs={4} sx={editorRow}> 
                Center glyph 
            </Grid>
            <Grid item xs={4} sx={editorRow}>
                <GlyphSelector value={centerGlyph.Type} onChange={(g) => 
                                        {
                                            updateCenterVal(g)
                                        }} ></GlyphSelector>
            </Grid>
            <Grid item xs={4}></Grid>
            {
                glyphs.Rings && glyphs.Rings.map((r, ri) => {
                    return <GlyphRingEditor value={r} index={ri} 
                        onUpdate={(val) => { 
                            onUpdate({
                                ...glyphs,
                                Rings: glyphs.Rings?.map(glyph => {
                                    if (glyph.Id !== val.Id) return glyph

                                    return {
                                        ...val
                                    }
                                })
                            })
                        }}
                        onRemove={
                            (id) => {
                                onUpdate({
                                    ...glyphs,
                                    Rings: glyphs.Rings?.filter(glyph => glyph.Id !== id)
                                })
                            }
                        }
                         />
                })
            }
             <Grid xs={4}>
            
            </Grid>
            <Grid xs={8}>
                <Button 
                    variant="contained"
                    onClick={() => {
                        const rings = glyphs.Rings ?? []
                        const newId = rings.length > 0
                            ? Math.max(...rings.map(x => x.Id)) + 1
                            : 1
                            
                        onUpdate({
                            ...glyphs,
                            Rings: [
                                ...rings,
                                { 
                                    Id : newId,
                                    Nodes: []
                                 }]
                            })
                        }}
                >Add Ring</Button>
            </Grid>
        </Grid>
       
    </>)
}

export default GlyphEditor