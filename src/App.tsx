import { useState } from 'react';
import './App.css';
import GlyphRoot from './Components/GlyphRoot/GlyphRoot';
import { TestGlyph } from './Data/GlyphDefinitions';
import Menu from './Components/Menu/Menu';

function App() {
  const [glyph, setGlyph] = useState(TestGlyph)

  return (
    <div className="App">
      <Menu loadGlyph={(g) => setGlyph(g)}></Menu>
      <GlyphRoot glyphs={ glyph }></GlyphRoot>

      {/* <GlyphRoot glyphs={
        {
          CenterGlyph: { Type : GlyphType.Fire },
          Rings : [
            { 
              Nodes : [
                { Type : GlyphType.Fire },
                { Type : GlyphType.Ice },
                { Type : GlyphType.Light },
                { Type : GlyphType.Plant }
              ]
            },
            { 
              Nodes : [
                { Type : GlyphType.Fire },
                { Type : GlyphType.Plant }
              ]
            }
          ]
        }
      }></GlyphRoot> */}
      
    </div>
  );
}

export default App;
