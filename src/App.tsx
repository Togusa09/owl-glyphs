import { createContext, useState } from 'react';
// import './App.css';
import GlyphRenderer from './Components/GlyphRoot/GlyphRenderer';
import { TestGlyph } from './Data/GlyphDefinitions';
import Menu from './Components/Menu/Menu';
import { Box, Container, Grid, ThemeProvider, createTheme } from '@mui/material';

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
    <ThemeProvider theme={theme}>
      <Box marginTop="50px" sx={{ flex: '1 1 auto', display: 'flex' }}>
        <Container
          maxWidth={false}
          sx={{
            paddingLeft: '50px !important',
            paddingRight: '50px !important',
          }}
        >
            <Grid container spacing={2}>
              <Grid container sm={6}>
                <Menu 
                  onGlyphUpdated={updatedGlyph => setGlyph(updatedGlyph)}
                  currentGlyph={glyph}></Menu>
              </Grid>
              <Grid container sm={6}>
                <GlyphRenderer glyphs={glyph}></GlyphRenderer>
              </Grid>
            </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
