import { GlyphCollectionModel } from "../Models/GlyphCollection";
import { GlyphType } from "../Models/GlyphType";

export const Invisibility : GlyphCollectionModel = {
    CenterGlyph: { Id: 1, Type: GlyphType.Light},
    Rings: [
        { 
            Id: 1,
            Offset: -45,
            Nodes:
            [
                { Id: 2, Type: GlyphType.Blank},
                { Id: 3,Type: GlyphType.Ice},
                { Id: 4,Type: GlyphType.Ice},
                { Id: 5, Type: GlyphType.Light}
            ] 
        }
    ]
}

export const SafetyHover : GlyphCollectionModel = {
  CenterGlyph: { Id: 1, Type: GlyphType.Light},
  Rings: [
      { 
          Offset: -45,
          Id: 1,
          Nodes:
          [
              { Id: 2, Type: GlyphType.Ice},
              { Id: 3, Type: GlyphType.Fire},
          ] 
      }
  ]
}

export const SleepMist : GlyphCollectionModel = {
  Rings: [
      { 
          Id: 1,
          //Offset: -45,
          Nodes:
          [
            { Id: 1, Type: GlyphType.Ice},
            { Id: 2, Type: GlyphType.Fire}
          ] 
      }
  ]
}

export const TestGlyph : GlyphCollectionModel = {
    CenterGlyph: { Id: 1, Type : GlyphType.Fire },
    Rings : [
      { 
        Id: 1,
        Nodes : [
          { Id: 2, Type : GlyphType.Fire },
          { Id: 3, Type : GlyphType.Ice },
          { Id: 4, Type : GlyphType.Light },
          { Id: 5, Type : GlyphType.Plant }
        ]
      },
      { 
        Id: 2,
        Nodes : [
          { Id: 6, Type : GlyphType.Fire },
          { Id: 7, Type : GlyphType.Plant }
        ]
      }
    ]
  }