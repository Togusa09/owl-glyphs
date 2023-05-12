import { GlyphCollectionModel } from "../Models/GlyphCollection";
import { GlyphType } from "../Models/GlyphType";

export const Invisibility : GlyphCollectionModel = {
    CenterGlyph: { Type: GlyphType.Light},
    Rings: [
        { 
            Offset: -45,
            Nodes:
            [
                { Type: GlyphType.Empty},
                { Type: GlyphType.Ice},
                { Type: GlyphType.Ice},
                { Type: GlyphType.Light}
            ] 
        }
    ]
}

export const TestGlyph: GlyphCollectionModel = {
    CenterGlyph: { Type : GlyphType.Fire },
    Rings : [
      { 
        Nodes : [
          { Type : GlyphType.Fire },
          { Type : GlyphType.Ice },
          { Type : GlyphType.Light },
          { Type : GlyphType.Plant }
        ]
      },
      { 
        Nodes : [
          { Type : GlyphType.Fire },
          { Type : GlyphType.Plant }
        ]
      }
    ]
  }