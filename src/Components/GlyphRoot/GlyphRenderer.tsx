import "./Glyphs.css";
import { GlyphRing } from "./GlyphRing";
import Glyph from "./Glyph";
import { Box } from "@mui/material";
import { useGlyphContext } from "../../Contexts/GlyphContextProvider";

const GlyphRenderer = () => {
  const { glyphArrangement } = useGlyphContext();

  const glyphRingDiameter = 440;
  const canvasSize = 1200;
  const halfSize = canvasSize / 2;
  const centerOffset = 30;

  let rings;
  if (glyphArrangement.rings) {
    var ringSpacing =
      (glyphRingDiameter - centerOffset) / glyphArrangement.rings.length;
    rings = glyphArrangement.rings.map((x, i) => {
      return (
        <GlyphRing
          key={x.id}
          glyphNodes={x.nodes}
          size={(i + 1) * ringSpacing + centerOffset}
          x={halfSize}
          y={halfSize}
          offset={x.offset}
          totalRings={glyphArrangement.rings!.length}
        ></GlyphRing>
      );
    });
  }

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: 6,
        minWidth: 300,
        width: 1,
        boxShadow: 1,
        borderRadius: 2,
        // height: '80vh'
      }}
    >
      <svg
        viewBox="0 0 1200 1200"
        style={{ display: "inline-block" }}
        className="glyphs"
      >
        <rect width="100%" height="100%" fill="white"></rect>
        {glyphArrangement.centerGlyph && (
          <Glyph
            glyphNode={glyphArrangement.centerGlyph}
            x={halfSize}
            y={halfSize}
            scale={0.6}
          ></Glyph>
        )}
        {glyphArrangement.rings && rings}
      </svg>
    </Box>
  );
};

export default GlyphRenderer;
