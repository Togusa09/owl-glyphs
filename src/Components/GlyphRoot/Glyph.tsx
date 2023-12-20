import { GlyphNodeModel } from "../../Models/GlyphCollection";
import { GlyphType } from "../../Models/GlyphType";
import { ReactComponent as LightGlyphSvg } from "../../Images/Light.svg";
import { ReactComponent as FireGlyphSvg } from "../../Images/Fire.svg";
import { ReactComponent as IceGlyphSvg } from "../../Images/Ice.svg";
import { ReactComponent as PlantGlyphSvg } from "../../Images/Plant.svg";

// Glyph svg code taken from https://codepen.io/jrcharney/pen/QWvGqgm

type GlyphProps = {
  glyphNode: GlyphNodeModel;
  scale?: number;
  x: number;
  y: number;
};

export const Glyph = ({ glyphNode, x, y, scale }: GlyphProps) => {
  const definedScale = scale ?? 0.2;
  const width = 500 * definedScale;

  const getGlyph = () => {
    const glyphAttributes = {
      x: x - width / 2,
      y: y - width / 2,
      width: width,
      height: width,
      stroke: "black",
      strokeWidth: "3px",
      fill: "none",
      vectorEffects:"non-scaling-stroke",
    };

    switch (glyphNode.type) {
      case GlyphType.Fire:
        return <FireGlyphSvg {...glyphAttributes} />;
      case GlyphType.Ice:
        return <IceGlyphSvg {...glyphAttributes} />;
      case GlyphType.Light:
        return <LightGlyphSvg {...glyphAttributes} />;
      case GlyphType.Plant:
        return <PlantGlyphSvg {...glyphAttributes} />;
      case GlyphType.Blank:
        return <></>;
    }
  };

  return getGlyph();
};

export default Glyph;
