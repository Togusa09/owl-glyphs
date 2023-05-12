import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GlyphType } from './Models/GlyphType';
import GlyphRoot from './Components/GlyphRoot/GlyphRoot';
import { Invisibility } from './Data/GlyphDefinitions';

function App() {
  return (
    <div className="App">

      <GlyphRoot glyphs={ Invisibility }></GlyphRoot>

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
