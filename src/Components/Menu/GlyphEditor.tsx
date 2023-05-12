import { Grid } from "@mui/material"
import { GlyphCollectionModel } from "../../Models/GlyphCollection"
import { GlyphType } from "../../Models/GlyphType"

type Props = {
    glyphs: GlyphCollectionModel
}

export const GlyphEditor = ({glyphs}: Props) => {
    return (<>

        <Grid container>
            <Grid item xs={6}> 
                Center glyph 
            </Grid>
            <Grid item xs={6}>
                { 
                    glyphs.CenterGlyph && GlyphType[glyphs.CenterGlyph?.Type]
                }
                {
                    !glyphs.CenterGlyph && GlyphType[GlyphType.Blank]
                }
            </Grid>
            {
                glyphs.Rings && glyphs.Rings.map((r, ri) => {
                    return <>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={8}> 
                            Ring {ri}
                        </Grid>
                        {
                            r.Nodes.map((n) =>{
                                return <>
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>{GlyphType[n.Type]}</Grid>
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