import { GlyphType } from "../../Models/GlyphType";
import LightGlyphSvg  from "../../Images/Light.svg?react";
import FireGlyphSvg  from "../../Images/Fire.svg?react";
import IceGlyphSvg  from "../../Images/Ice.svg?react";
import PlantGlyphSvg from "../../Images/Plant.svg?react";
import type { GlyphNodeModel } from "../../Models/GlyphCollection";

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
