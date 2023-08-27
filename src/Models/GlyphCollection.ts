import { GlyphType } from "./GlyphType"

export interface GlyphCollectionModel{
    Rings?: GlyphRingModel[]
    CenterGlyph?: GlyphNodeModel
}

export interface GlyphRingModel{
    Id: number
    Nodes: GlyphNodeModel[]
    Offset: number
}

export interface GlyphNodeModel{
    Id: number
    Type: GlyphType
}