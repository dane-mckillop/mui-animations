import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#0052cc',
      },
      secondary: {
        main: '#edf2ff',
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path={"/"} element={<Home/>}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App
