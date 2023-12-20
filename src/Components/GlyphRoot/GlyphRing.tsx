import { GlyphNodeModel } from "../../Models/GlyphCollection";
import Glyph from "./Glyph";

type Props = {
  index?: number;
  size: number;
  x: number;
  y: number;
  offset?: number;
  glyphNodes: GlyphNodeModel[];
  totalRings: number;
};

export const GlyphRing = ({
  glyphNodes,
  size,
  index,
  x,
  y,
  offset,
  totalRings,
}: Props) => {
  index = index ?? 0;

  const glyphCount = glyphNodes.length;

  var offsetAngle = (offset ?? 0) * (Math.PI / 180);
  var totalAngle = Math.PI * 2;

  const ringNodeScale = (1 / totalRings) * 0.55;

  return (
    <>
      <circle
        cx={x}
        cy={y}
        r={size}
        stroke="black"
        strokeWidth="2"
        fill="none"
      />
      {glyphNodes.map((glyph, i) => {
        var glyphX =
          size * Math.cos((totalAngle / glyphCount) * i + offsetAngle);
        var glyphY =
          size * Math.sin((totalAngle / glyphCount) * i + offsetAngle);

        return (
          <Glyph
            key={glyph.id}
            glyphNode={glyph}
            x={x + glyphX}
            y={y + glyphY}
            scale={ringNodeScale}
          ></Glyph>
        );
      })}
    </>
  );
};

export default GlyphRing;
