import { GlyphType } from "./GlyphType"

export interface GlyphCollectionModel{
    Rings?: GlyphRingModel[]
    CenterGlyph?: GlyphNodeModel
}

export interface GlyphRingModel{
    Nodes: GlyphNodeModel[]
    Offset?: number
}

export interface GlyphNodeModel{
    Type: GlyphType
}