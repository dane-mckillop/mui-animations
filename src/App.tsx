import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import CenteredDiv from './components/CenteredDiv';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#0052cc',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
    components: {
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            transition: 'opacity 300ms ease-in-out',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <CenteredDiv>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </CenteredDiv>
    </ThemeProvider>
  )
}

export default App
