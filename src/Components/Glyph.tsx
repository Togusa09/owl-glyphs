import { GlyphType } from "../Models/GlyphType"

//export const GlyphRing = ({children, size}: Props) => {
type Props = {
    glyphType: GlyphType
    x: number
    y: number
}

// Glyph svg code taken from https://codepen.io/jrcharney/pen/QWvGqgm

type ChildProps = {
    x: number
    y: number
}

export const LightGlyph = ({x, y}: ChildProps) => {
    var thickness = 10;
    return (
    <g filter="url(#softGlowLight)" stroke="black" strokeWidth={10} transform={"translate("+ x +"," + y + ") scale(0.2)"}>
        <circle cx="0" cy="0" r="250" fill="gray"/>
        <circle cx="0" cy="0" r="200"/>
        <line x1="0" y1="-50" x2="0" y2="200" />
        {/* <!-- center --> */}
        <line x1="-180" y1="80" x2="180" y2="80"/>
        {/* <!-- crossbar --> */}
        <circle cx="0" cy="-90" r="40"/>
        <polyline points="-180 80 0 -50 180 80"></polyline>
        <polyline points="-39 -100 0 -200 39 -100"></polyline>
        {/* <!-- hat -->
        <!-- two lines --> */}
        <line x1="-30" y1="15" x2="30" y2="-10" />
        <line x1="-30" y1="40" x2="30" y2="15"  />
      </g>
    )
}

export const FireGlyph = ({x, y}: ChildProps) => {
    var thickness = 10;
    return (
        <>
        <defs>
            {/* <filter id="softGlowFire" height="300%" width="300%" x="-75%" y="-75%">
                <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken" />
                <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />
                <feFlood flood-color="rgb(255,92,92)" result="glowColor" />
                <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
                <feMerge>
                    <feMergeNode in="softGlow_colored"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter> */}
        </defs>
        <g filter="url(#softGlowFire)" stroke="black" fill="none" strokeWidth={10} transform={"translate("+ x +"," + y + ") scale(0.2)"}>
            <circle cx="0" cy="0" r="250" fill="gray" />
            <circle cx="0" cy="0" r="200"/>
            <circle cx="0" cy="100" r="100" />
            {/* <!-- big circle --> */}
            <circle cx="0" cy="100" r="1" />
            {/* <!-- dot --> */}
            <circle cx="0" cy="-60" r="60" />
            {/* <!-- little circle --> */}
            <path d="M  -60 -60 
                    C  -60  -42 -70 -122   0 -200
                    C   70 -122  60  -42  60  -60 "/>
                    {/* <!-- little flame --> */}
            <path d="M -100 100 
                    C -100  70 -100 -20   0 -120 
                    C  100 -20  100  70 100  100"/>
                    {/* <!-- big flame --> */}
        </g>
      </>
    )
}

export const IceGlyph = ({x, y}: ChildProps) => {
    var thickness = 10;
    return (
    <g filter="url(#softGlowIce)" stroke="black" fill="none" strokeWidth={10} transform={"translate("+ x +"," + y + ") scale(0.2)"}>
        <circle cx="0" cy="0" r="250" fill="gray"/>
        <circle cx="0" cy="0" r="200"/>
        <line x1="-180" y1="80" x2="180" y2="80"/>
        {/* <!-- crossbar --> */}
        <line x1="0" y1="80" x2="0" y2="-200" />
        {/* <!-- center --> */}
        <polyline points="0 80 -70 -100 0 -200 70 -100 0 80"></polyline>
        {/* <!-- kite --> */}
        <path d="M -190 40 Q -100 -20 0 -20 Q 100 -20 190 40" />
        {/* <!-- bend --> */}
        <polyline points="0 80 -20 100 0 120 20 100 0 80" />
        {/* <!-- bottom square --> */}
      </g>
    )
}

export const PlantGlyph = ({x, y}: ChildProps) => {
    var thickness = 10;
    return (
    <g filter="url(#softGlowPlant)" stroke="black" fill="none" strokeWidth={10} transform={"translate("+ x +"," + y + ") scale(0.2)"}>
        <circle cx="0" cy="0" r="250" fill="gray"/>
        <circle cx="0" cy="0" r="200"/>
        <line x1="0" y1="-50" x2="0" y2="200" />
        {/* <!-- center --> */}
        <line x1="-180" y1="80" x2="180" y2="80"/>
        {/* <!-- crossbar --> */}
        <circle cx="0" cy="-90" r="40"/>
        <polyline points="-180 80 0 -50 180 80"></polyline>
        <polyline points="-39 -100 0 -200 39 -100"></polyline>
        {/* <!-- hat -->
        <!-- two lines --> */}
        <line x1="-30" y1="15" x2="30" y2="-10" />
        <line x1="-30" y1="40" x2="30" y2="15"  />
      </g>
    )
}

export const Glyph = ({glyphType,x ,y}: Props) => {
    const mapTypeToColor = ()  => {
        switch(glyphType){
            case GlyphType.Fire: return "red";
            case GlyphType.Ice: return "blue"
            case GlyphType.Light: return "white"
            case GlyphType.Plant: return "green"
        }
    }

    const getGlyph = () => {
        // <circle cx={x} cy={y} r="25" fill={mapTypeToColor()} stroke={mapTypeToColor()}/>;
        switch(glyphType){
            case GlyphType.Fire: return  <FireGlyph x={x} y={y}></FireGlyph>
            case GlyphType.Ice: return <IceGlyph x={x} y={y}></IceGlyph>
            case GlyphType.Light: return <LightGlyph x={x} y={y}></LightGlyph>
            case GlyphType.Plant: return <PlantGlyph x={x} y={y}></PlantGlyph>
        }
    }

    var glyph = getGlyph();
     
    return (getGlyph())

    // return (<circle cx={x} cy={y} r="25" fill={mapTypeToColor(glyphType)} stroke={mapTypeToColor(glyphType)}/>)
}

export default Glyph