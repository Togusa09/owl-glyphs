import { GlyphCollectionModel } from "../../Models/GlyphCollection"
import SavedGlyphMenu from "./SavedGlyphMenu"

type Props = {
    loadGlyph: (gc: GlyphCollectionModel) => void
}

export const Menu = (props: Props) => {
    return (<div>
        <SavedGlyphMenu loadGlyph={(g) => props.loadGlyph(g)}></SavedGlyphMenu>
    </div>)
}

export default Menu