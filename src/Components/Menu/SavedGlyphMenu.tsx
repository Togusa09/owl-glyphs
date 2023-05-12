import { Invisibility, TestGlyph } from "../../Data/GlyphDefinitions"
import { GlyphCollectionModel } from "../../Models/GlyphCollection"
import { GlyphType } from "../../Models/GlyphType"

type Props = {
    loadGlyph: (gc: GlyphCollectionModel) => void
}



export const SavedGlyphMenu = (props: Props) => {
    return (<div className="save-glyph-menu">
        <button onClick={() => props.loadGlyph(Invisibility)} >Invisibility</button>
        <button onClick={() => props.loadGlyph(TestGlyph)}>Test Glyph</button>
    </div>)
}

export default SavedGlyphMenu