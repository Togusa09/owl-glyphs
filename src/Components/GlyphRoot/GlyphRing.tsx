import { GlyphNodeModel } from "../../Models/GlyphCollection"
import Glyph from "./Glyph"

type Props = {
    index?: number
    size: number
    x: number
    y: number
    offset?: number
    glyphNodes: GlyphNodeModel[]
}

export const GlyphRing = ({glyphNodes, size, index, x, y, offset}: Props) => {
    console.log("Test")
    index = index ?? 0
    
    const glyphCount = glyphNodes.length

    var offsetAngle = (offset ?? 0) * (Math.PI / 180)
    var totalAngle = Math.PI * 2;

    return (
        <>
            <circle cx={x} cy={y} r={size} stroke="black" stroke-width="2" fill="none"/>
            {glyphNodes.map((glyph, i) => {
                {
                    var glyphX = size * Math.cos((totalAngle / glyphCount * i) + offsetAngle)
                    var glyphY = size * Math.sin((totalAngle / glyphCount * i) + offsetAngle)
                }
                return (<Glyph glyphNode={glyph} x={x + glyphX} y={y + glyphY}></Glyph>)
            })
            }
        </>
    )
}

export default GlyphRing
