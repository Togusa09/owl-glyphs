import { GlyphArrangementModel } from "../Models/GlyphCollection";
import { GlyphType } from "../Models/GlyphType";

export const Invisibility: GlyphArrangementModel = {
  name: "Invisibility",
  editable: false,
  centerGlyph: { id: 1, type: GlyphType.Light },
  rings: [
    {
      id: 1,
      offset: -45,
      nodes: [
        { id: 2, type: GlyphType.Blank },
        { id: 3, type: GlyphType.Ice },
        { id: 4, type: GlyphType.Ice },
        { id: 5, type: GlyphType.Light },
      ],
    },
  ],
};

export const SafetyHover: GlyphArrangementModel = {
  name: "Safety Hover",
  editable: false,
  centerGlyph: { id: 1, type: GlyphType.Light },
  rings: [
    {
      offset: -45,
      id: 1,
      nodes: [
        { id: 2, type: GlyphType.Ice },
        { id: 3, type: GlyphType.Fire },
      ],
    },
  ],
};

export const SleepMist: GlyphArrangementModel = {
  name: "Sleep Mist",
  editable: false,
  rings: [
    {
      id: 1,
      nodes: [
        { id: 1, type: GlyphType.Ice },
        { id: 2, type: GlyphType.Fire },
      ],
      offset: 0,
    },
  ],
};

export const TestGlyph: GlyphArrangementModel = {
  name: "Test Glyph",
  editable: false,
  centerGlyph: { id: 1, type: GlyphType.Fire },
  rings: [
    {
      id: 1,
      offset: 0,
      nodes: [
        { id: 2, type: GlyphType.Fire },
        { id: 3, type: GlyphType.Ice },
        { id: 4, type: GlyphType.Light },
        { id: 5, type: GlyphType.Plant },
      ],
    },
    {
      id: 2,
      offset: 0,
      nodes: [
        { id: 6, type: GlyphType.Fire },
        { id: 7, type: GlyphType.Plant },
      ],
    },
  ],
};
