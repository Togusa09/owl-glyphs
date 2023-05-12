import { PropsWithChildren } from "react";
import { GlyphRing } from "./GlypRing";
import { GlyphType } from "../Models/GlyphType";
import Glyph from "./Glyph";
import { GlyphCollectionModel } from "../Models/GlyphCollection";

type Props = {
    //children: React.ReactElement | React.ReactElement[]
    //glyphs: GlyphType[][] | GlyphType[] | GlyphType
    glyphs: GlyphCollectionModel
}

const  GlyphRoot = ({glyphs}: Props) => {

    const glyphRingDiameter = 500;
    const canvasSize = 1200;
    const halfSize = canvasSize / 2;
    let child

    if (glyphs.CenterGlyph){
        child = <Glyph 
            glyphNode={glyphs.CenterGlyph} 
            x={halfSize}
            y={halfSize}
        ></Glyph>
    }

    if(glyphs.Rings){
        var ringSpacing = (glyphRingDiameter / glyphs.Rings.length)
        child = glyphs.Rings.map((x, i) => {
            return <GlyphRing 
                    glyphNodes={x.Nodes}
                    size={(i + 1) * ringSpacing}
                    x={halfSize}
                    y={halfSize}
                    ></GlyphRing>
        })
    }    

    return (
        <svg fill="gray" width={canvasSize} height={canvasSize}>
            <rect width={canvasSize} height={canvasSize} fill="white"></rect>
            {child}
        </svg>
    )
}

export default GlyphRoot;