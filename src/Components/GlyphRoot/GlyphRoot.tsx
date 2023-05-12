import './Glyphs.css'
import { GlyphRing } from "./GlyphRing";
import Glyph from "./Glyph";
import { GlyphCollectionModel } from "../../Models/GlyphCollection";

type Props = {
    //children: React.ReactElement | React.ReactElement[]
    //glyphs: GlyphType[][] | GlyphType[] | GlyphType
    glyphs: GlyphCollectionModel
}

const  GlyphRoot = ({glyphs}: Props) => {

    const glyphRingDiameter = 440;
    const canvasSize = 1000;
    const halfSize = canvasSize / 2;
    let centerGlyph


    let rings
    if(glyphs.Rings){
        var ringSpacing = (glyphRingDiameter / glyphs.Rings.length)
        rings = glyphs.Rings.map((x, i) => {
            return <GlyphRing 
                    glyphNodes={x.Nodes}
                    size={(i + 1) * ringSpacing}
                    x={halfSize}
                    y={halfSize}
                    offset={x.Offset}
                    ></GlyphRing>
        })
    }    

    return (
        <svg fill="gray" viewBox="0 0 1000 1000" style={{width:'40%'}}>
            <rect width='100%' height='100%' fill="white"></rect>
            {
                glyphs.CenterGlyph && <Glyph 
                                            glyphNode={glyphs.CenterGlyph} 
                                            x={halfSize}
                                            y={halfSize}
                                            scale={0.4}
                                        ></Glyph>            
            }
            {
                glyphs.Rings && rings
            }
        </svg>
    )
}

export default GlyphRoot;