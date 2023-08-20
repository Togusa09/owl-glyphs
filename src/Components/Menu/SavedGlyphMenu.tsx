import { Invisibility, SleepMist, TestGlyph, SafetyHover } from "../../Data/GlyphDefinitions"
import { GlyphCollectionModel } from "../../Models/GlyphCollection"
import Button from '@mui/material/Button';

type Props = {
    onGlyphLoaded: (gc: GlyphCollectionModel) => void
}

export const SavedGlyphMenu = ({onGlyphLoaded}: Props) => {
    return (<div className="save-glyph-menu">
        <Button onClick={() => onGlyphLoaded(Invisibility)} >Invisibility</Button>
        <Button onClick={() => onGlyphLoaded(SleepMist)}>Sleep Mist</Button>
        <Button onClick={() => onGlyphLoaded(SafetyHover)}>Safety Hover</Button>
        <Button onClick={() => onGlyphLoaded(TestGlyph)}>Test Glyph</Button>
    </div>)
}

export default SavedGlyphMenu