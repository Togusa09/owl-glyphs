import { PropsWithChildren } from "react"
import { GlyphType } from "../Models/GlyphType"
import Glyph from "./Glyph"

type Props = {
    //children?: JSX.Element,
    index?: number
    size: number
    x: number
    y: number
    glyphs: GlyphType[]
}

export const GlyphRing = ({glyphs, size, index, x, y}: Props) => {
    console.log("Test")
    index = index ?? 0
    const glyphCount = glyphs.length;

    var totalAngle = Math.PI * 2;



    return (
        <>
            <circle cx={x} cy={y} r={size} stroke="black" stroke-width="2" fill="none"/>
            {glyphs.map((glyph, i) => {
                {
                    var glyphX = size * Math.cos(totalAngle / glyphCount * i)
                    var glyphY = size * Math.sin(totalAngle / glyphCount * i)
                }
                return (<Glyph glyphType={glyph} x={x + glyphX} y={y + glyphY}></Glyph>)
            })
            }
        </>
    )
}

export default GlyphRing
