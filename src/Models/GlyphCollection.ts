import { GlyphType } from "./GlyphType";

export interface GlyphArrangementModel {
  name: string;
  rings?: GlyphRingModel[];
  centerGlyph?: GlyphNodeModel;
  editable: boolean;
}

export interface GlyphRingModel {
  id: number;
  nodes: GlyphNodeModel[];
  offset: number;
}

export interface GlyphNodeModel {
  id: number;
  type: GlyphType;
}
