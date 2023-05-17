import { useState } from 'react';
import './App.css';
import GlyphRoot from './Components/GlyphRoot/GlyphRoot';
import { TestGlyph } from './Data/GlyphDefinitions';
import Menu from './Components/Menu/Menu';
import { Grid, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    }
    // success: {
    //   dark: '#009688',
    // },
  },
});


function App() {
  const [glyph, setGlyph] = useState(TestGlyph)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={2} >
            <Menu loadGlyph={
              (g) => {
                setGlyph(g)}
              } 
              currentGlyph={glyph}></Menu>
          </Grid>
          <Grid item xs={8}>
            <GlyphRoot glyphs={ glyph }></GlyphRoot>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
