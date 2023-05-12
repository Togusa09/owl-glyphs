import { Invisibility, TestGlyph } from "../../Data/GlyphDefinitions"
import { GlyphCollectionModel } from "../../Models/GlyphCollection"
import Button from '@mui/material/Button';

type Props = {
    loadGlyph: (gc: GlyphCollectionModel) => void
}

export const SavedGlyphMenu = (props: Props) => {
    return (<div className="save-glyph-menu">
        <Button onClick={() => props.loadGlyph(Invisibility)} >Invisibility</Button>
        <Button onClick={() => props.loadGlyph(TestGlyph)}>Test Glyph</Button>
    </div>)
}

export default SavedGlyphMenu