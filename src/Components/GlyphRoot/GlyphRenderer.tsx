import './Glyphs.css'
import { GlyphRing } from "./GlyphRing";
import Glyph from "./Glyph";
import { GlyphCollectionModel } from "../../Models/GlyphCollection";
import { Box } from '@mui/material';

type Props = {
    //children: React.ReactElement | React.ReactElement[]
    //glyphs: GlyphType[][] | GlyphType[] | GlyphType
    glyphs: GlyphCollectionModel
}

const GlyphRenderer = ({glyphs}: Props) => {
    console.log("Rendering glyph canvas")

    const glyphRingDiameter = 440;
    const canvasSize = 1200;
    const halfSize = canvasSize / 2;
    const centerOffset = 30

    let rings
    if(glyphs.Rings){
        var ringSpacing = ((glyphRingDiameter - centerOffset) / glyphs.Rings.length)
        rings = glyphs.Rings.map((x, i) => {
            return <GlyphRing 
                        key = {x.Id}
                        glyphNodes={x.Nodes}
                        size={((i + 1) * ringSpacing) + centerOffset}
                        x={halfSize}
                        y={halfSize}
                        offset={x.Offset}
                        totalRings = {glyphs.Rings!.length}
                    ></GlyphRing>
        })
    }    

    return (
        <Box sx={{
            bgcolor: 'background.paper',
            border: 0,
            p: 2,
            minWidth: 300,
            // height: '80vh'
          }}>
            <svg fill="gray" viewBox="0 0 1200 1200" style={{height:'100%'}}>
                <rect width='100%' height='100%' fill="white"></rect>
                {
                    glyphs.CenterGlyph && <Glyph 
                                                glyphNode={glyphs.CenterGlyph} 
                                                x={halfSize}
                                                y={halfSize}
                                                scale={0.6}
                                            ></Glyph>            
                }
                {
                    glyphs.Rings && rings
                }
            </svg>
        </Box>
    )
}

export default GlyphRenderer;