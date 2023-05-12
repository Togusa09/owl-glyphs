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