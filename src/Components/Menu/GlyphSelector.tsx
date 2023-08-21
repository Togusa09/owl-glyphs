import { MenuItem, Select } from "@mui/material"
import { GlyphType } from "../../Models/GlyphType"

type Props = {
    value: GlyphType
    onChange: (val: GlyphType) => void
}

export const GlyphSelector = ({value, onChange}: Props) => {
    return (
        <Select
            sx={{width:"1"}}
            value={value}
            onChange={(e) => 
                {
                    console.log("Selected new glyph " + e.target.value)
                    onChange(e.target.value as GlyphType)
                }
            }
            >
                <MenuItem value={GlyphType.Blank}>Blank</MenuItem>
                <MenuItem value={GlyphType.Fire}>Fire</MenuItem>
                <MenuItem value={GlyphType.Ice}>Ice</MenuItem>
                <MenuItem value={GlyphType.Light}>Light</MenuItem>
                <MenuItem value={GlyphType.Plant}>Plant</MenuItem>
        </Select>
    )
}

export default GlyphSelector