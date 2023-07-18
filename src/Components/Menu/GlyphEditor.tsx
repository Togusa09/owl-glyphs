import { Grid } from "@mui/material"
import { GlyphCollectionModel, GlyphNodeModel, GlyphRingModel } from "../../Models/GlyphCollection"
import { GlyphType } from "../../Models/GlyphType"
import GlyphSelector from "./GlyphSelector"
import { Fragment, useState } from "react"
import zIndex from "@mui/material/styles/zIndex"

type GlyphRingEditorProps = {
    value: GlyphRingModel
    index: number
    //onUpdate: (val: GlyphRingModel) => void
}

export const GlyphRingEditor = ({value, index}: GlyphRingEditorProps) => {
    var [glyphRing, setGlyphRing] = useState(value)

    // var updateStuff = () => {
    //     useState({
    //         ...glyphRing,
    //         Nodes: [
    //             glyphRing.Nodes
    //         ]
    //     })
    // }

    return (<Fragment key={value.Id}>
            <Grid item xs={4}></Grid>
            <Grid item xs={8}> 
                Ring {index}
            </Grid>
            {
                value.Nodes.map((n, ni) =>{
                    return <GlyphNodeEditor value={n} onUpdate={ (g) => {
                        //updateStuff();
                        // useState({
                        //     ...glyphRing,
                        //     Nodes: [
                        //         glyphRing.Nodes
                        //     ]
                        // })
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
    var [glyphNode, setGlyphNode] = useState(value);

    return (<Fragment key={glyphNode.Id}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>{GlyphType[glyphNode.Type]}</Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}><GlyphSelector value={glyphNode.Type} onChange={(g) => 
            {
                setGlyphNode({...glyphNode, Type: g })
                //updateVal(ri, ni, g)
                onUpdate(glyphNode)
            }} ></GlyphSelector></Grid>
    </Fragment>)
}

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
                    return <GlyphRingEditor value={r} index={ri}></GlyphRingEditor>
                })
            }
        </Grid>

    </>)
}

export default GlyphEditor