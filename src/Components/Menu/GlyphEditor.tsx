import { Grid } from "@mui/material"
import { GlyphCollectionModel } from "../../Models/GlyphCollection"
import { GlyphType } from "../../Models/GlyphType"
import GlyphSelector from "./GlyphSelector"

type Props = {
    glyphs: GlyphCollectionModel
    onUpdate: (val: GlyphCollectionModel) => void
}

export const GlyphEditor = ({glyphs, onUpdate}: Props) => {
    const updateVal = (ri: number, ni: number, val: GlyphType) =>{
        if (!glyphs.Rings) return

        var newGlyphs =  JSON.parse(JSON.stringify(glyphs));
        newGlyphs!.Rings[ri].Nodes[ni].Type = val
        
        onUpdate(newGlyphs)
    }

    const updateCenterVal = (val: GlyphType) => {
        var newGlyphs =  JSON.parse(JSON.stringify(glyphs));
        newGlyphs!.CenterGlyph.Type = val
        
        onUpdate(newGlyphs)
    }

    var centerGlyph = glyphs.CenterGlyph ?? { Type:  GlyphType.Blank}

    return (<>

        <Grid container>
            <Grid item xs={6}> 
                Center glyph 
            </Grid>
            <Grid item xs={6}>
                <GlyphSelector value={centerGlyph.Type} onChange={(g) => 
                                        {
                                            updateCenterVal(g)
                                        }} ></GlyphSelector>
            </Grid>
            {
                glyphs.Rings && glyphs.Rings.map((r, ri) => {
                    return <>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={8}> 
                            Ring {ri}
                        </Grid>
                        {
                            r.Nodes.map((n, ni) =>{
                                return <>
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>{GlyphType[n.Type]}</Grid>
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}><GlyphSelector value={n.Type} onChange={(g) => 
                                        {
                                            updateVal(ri, ni, g)
                                        }} ></GlyphSelector></Grid>
                                </>
                            })
                        } 
                    </>
                })
            }
        </Grid>

    </>)
}

export default GlyphEditor