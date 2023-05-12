import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlyphRoot from './Components/GlyphRoot';
import Glyph from './Components/Glyph';
import GlyphRing from './Components/GlypRing';
import { GlyphType } from './Models/GlyphType';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <GlyphRoot glyphs={GlyphType.Ice}></GlyphRoot>
      <GlyphRoot glyphs={GlyphType.Fire}></GlyphRoot>
      <GlyphRoot glyphs={GlyphType.Light}></GlyphRoot>
      <GlyphRoot glyphs={GlyphType.Plant}></GlyphRoot> */}

      {/* <GlyphRoot glyphs={[GlyphType.Fire, GlyphType.Light, GlyphType.Plant, GlyphType.Ice]}></GlyphRoot> */}
      {/* <GlyphRoot glyphs={
        [
          [GlyphType.Fire, GlyphType.Light, GlyphType.Plant, GlyphType.Ice],
          [GlyphType.Fire, GlyphType.Light, GlyphType.Light, GlyphType.Plant, GlyphType.Ice],
          [GlyphType.Fire, GlyphType.Light, GlyphType.Plant ]
        ]
        }></GlyphRoot> */}
      <GlyphRoot glyphs={
        {
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
      }></GlyphRoot>
      
    </div>
  );
}

export default App;
