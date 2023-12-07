// import './App.css';
import GlyphRenderer from "./Components/GlyphRoot/GlyphRenderer";
import Menu from "./Components/Menu/Menu";
import {
  Box,
  Container,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import GlyphContextProvider from "./Contexts/GlyphContextProvider";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    // success: {
    //   dark: '#009688',
    // },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlyphContextProvider>
        <Box marginTop="50px" sx={{ flex: "1 1 auto", display: "flex" }}>
          <Container
            maxWidth={false}
            sx={{
              paddingLeft: "50px !important",
              paddingRight: "50px !important",
            }}
          >
            <Grid container spacing={2}>
              <Grid container item sm={4}>
                <Menu />
              </Grid>
              <Grid container item sm={8}>
                <GlyphRenderer />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </GlyphContextProvider>
    </ThemeProvider>
  );
}

export default App;
