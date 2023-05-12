import { PropsWithChildren } from "react";
import { GlyphRing } from "./GlypRing";
import { GlyphType } from "../Models/GlyphType";
import Glyph from "./Glyph";

type Props = {
    //children: React.ReactElement | React.ReactElement[]
    glyphs: GlyphType[][] | GlyphType[] | GlyphType
}


// const  InnerGlyphRoot = ({glyphs}: Props) => {
//     return (

//     )
// }

const  GlyphRoot = ({glyphs}: Props) => {

    // var childElements = Array.isArray(children) ? children : [children];

    // if (childElements.length != childElements.filter(x => x instanceof GlyphRing).length)
    // {
    //     throw new Error("All children must be same type")
    // }
    // function renderGlyph(glyphType: GlyphType)  {
    //     return <Glyph glyphType={glyphType}></Glyph>
    // }

    // function renderGlyph(glyphType: GlyphType[])  {
    //     return <Glyph glyphType={glyphType}></Glyph>
    // }
    const totalSize = 300;
    const halfSize = totalSize / 2;
    let child
    if(Array.isArray(glyphs)){ // Ring or multiple rings
        var g = glyphs[0]
        if(Array.isArray(g)){
            var t = g[0];
            var t2 = glyphs;
            child = glyphs.map((x, i) => {
                return <GlyphRing 
                    glyphs={x as GlyphType[]} 
                    size={(glyphs.length - i) * totalSize * 0.4}
                    x={totalSize}
                    y={totalSize}
                    ></GlyphRing>
            })
        }
        else{
            child = <GlyphRing 
                glyphs={glyphs as GlyphType[]} 
                size={totalSize * 0.8}
                x={totalSize }
                y={totalSize}
            ></GlyphRing>
        }
        
    } else{ // Single Glyph
        child = <Glyph glyphType={glyphs as GlyphType}
            x={totalSize}
            y={totalSize}
        ></Glyph>
    }
    

    return (
        <svg fill="gray" width={totalSize * 4} height={totalSize * 4}>
            <rect width={totalSize * 2} height={totalSize * 2} fill="gray"></rect>
            {child}
        </svg>
    )
}

export default GlyphRoot;