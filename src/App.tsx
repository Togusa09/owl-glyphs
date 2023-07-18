import { useState } from 'react';
// import './App.css';
import GlyphRoot from './Components/GlyphRoot/GlyphRoot';
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
          <Grid container sx={{borderStyle:'none'}}>
            <Grid item xs={1} />
            <Grid item xs={2} sx={{border:'2px solid red'}}>
              <Menu loadGlyph={
                (g) => {
                  setGlyph(g)}
                } 
                currentGlyph={glyph}></Menu>
            </Grid>
            <Grid item xs={8} sx={{border:0}}>
              <GlyphRoot glyphs={ glyph }></GlyphRoot>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Container>
      </Box>
      {/* <Box>
        <Footer />
      </Box> */}



      {/* <Box sx={{ flexGrow: 1 }}>
        
      </Box> */}
    </ThemeProvider>
  );
}

export default App;
