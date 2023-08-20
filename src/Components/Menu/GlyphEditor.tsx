import { Grid } from "@mui/material"
import { GlyphCollectionModel, GlyphNodeModel, GlyphRingModel } from "../../Models/GlyphCollection"
import { GlyphType } from "../../Models/GlyphType"
import GlyphSelector from "./GlyphSelector"
import { Fragment } from "react"

type GlyphRingEditorProps = {
    value: GlyphRingModel
    index: number
    onUpdate: (val: GlyphRingModel) => void
}

export const GlyphRingEditor = ({value, index, onUpdate}: GlyphRingEditorProps) => {

    return (<Fragment key={value.Id}>
            <Grid item xs={4}></Grid>
            <Grid item xs={8}> 
                Ring {index}
            </Grid>
            {
                value.Nodes.map((n, ni) =>{
                    return <GlyphNodeEditor value={n} onUpdate={ (updatedGlyph) => {
                        var t = {
                            ...value,
                            Nodes: value.Nodes.map(node => {
                                if (node.Id != updatedGlyph.Id){
                                    return node
                                }

                                return updatedGlyph
                            })
                        }
                        onUpdate(t)
                    }
                    }></GlyphNodeEditor>
                })
            } 
        </Fragment>)
}

type GlyphNodeEditorProps = {
    value: GlyphNodeModel
    onUpdate: (val: GlyphNodeModel) => void
}

export const GlyphNodeEditor = ({value, onUpdate}: GlyphNodeEditorProps) => {
    return (<Fragment key={value.Id}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>{GlyphType[value.Type]}</Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}><GlyphSelector value={value.Type} onChange={(glyph) => 
            {
                var t = {...value, Type: glyph }
                onUpdate(t)
            }} ></GlyphSelector></Grid>
    </Fragment>)
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
                    return <GlyphRingEditor value={r} index={ri} 
                        onUpdate={(val) => { 
                            const t = {
                                ...glyphs,
                                Rings: glyphs.Rings?.map(glyph => {
                                    if (glyph.Id != val.Id) return glyph

                                    return {
                                        ...val
                                    }
                                })
                            }
                            onUpdate(t)
                        }} />
                })
            }
        </Grid>

    </>)
}

export default GlyphEditor