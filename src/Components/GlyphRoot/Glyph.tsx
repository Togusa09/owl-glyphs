import { GlyphNodeModel } from "../../Models/GlyphCollection";
import { GlyphType } from "../../Models/GlyphType";
import { ReactComponent as LightGlyphSvg } from "../../Images/Light.svg";
import { ReactComponent as FireGlyphSvg } from "../../Images/Fire.svg";
import { ReactComponent as IceGlyphSvg } from "../../Images/Ice.svg";
import { ReactComponent as PlantGlyphSvg } from "../../Images/Plant.svg";

type Props = {
  glyphNode: GlyphNodeModel;
  scale?: number;
  x: number;
  y: number;
};

// Glyph svg code taken from https://codepen.io/jrcharney/pen/QWvGqgm

type ChildProps = {
  x: number;
  y: number;
  scale: number;
};

export const LightGlyph = ({ x, y, scale }: ChildProps) => {
  const width = 500 * scale;
  return (
    <LightGlyphSvg
      x={x - width / 2}
      y={y - width / 2}
      width={width}
      height={width}
      stroke="black"
      strokeWidth="3px"
      fill="none"
    />
  );
};

export const FireGlyph = ({ x, y, scale }: ChildProps) => {
  const width = 500 * scale;
  return (
    <FireGlyphSvg
      x={x - width / 2}
      y={y - width / 2}
      width={width}
      height={width}
      stroke="black"
      strokeWidth="3px"
      fill="none"
    />
  );
};

export const IceGlyph = ({ x, y, scale }: ChildProps) => {
  const width = 500 * scale;
  return (
    <IceGlyphSvg
      x={x - width / 2}
      y={y - width / 2}
      width={width}
      height={width}
      stroke="black"
      strokeWidth="3px"
      fill="none"
    />
  );
};

export const PlantGlyph = ({ x, y, scale }: ChildProps) => {
  const width = 500 * scale;
  return (
    <PlantGlyphSvg
      x={x - width / 2}
      y={y - width / 2}
      width={width}
      height={width}
      stroke="black"
      strokeWidth="3px"
      fill="none"
    />
  );
};

export const Glyph = ({ glyphNode, x, y, scale }: Props) => {
  const definedScale = scale ?? 0.2;

  const getGlyph = () => {
    switch (glyphNode.Type) {
      case GlyphType.Fire:
        return <FireGlyph x={x} y={y} scale={definedScale}></FireGlyph>;
      case GlyphType.Ice:
        return <IceGlyph x={x} y={y} scale={definedScale}></IceGlyph>;
      case GlyphType.Light:
        return <LightGlyph x={x} y={y} scale={definedScale}></LightGlyph>;
      case GlyphType.Plant:
        return <PlantGlyph x={x} y={y} scale={definedScale}></PlantGlyph>;
      case GlyphType.Blank:
        return <></>;
    }
  };

  return getGlyph();
};

export default Glyph;
