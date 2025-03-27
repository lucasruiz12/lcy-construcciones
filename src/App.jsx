// import { BrowserRouter, Route, Routes } from 'react-router';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './App.css';
import Home from './pages/Home';

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h3: { fontSize: "3rem", fontWeight: 600 },
    body1: { fontSize: "1.25rem", textAlign: "justify" },
    button: { textTransform: "none", fontSize: "1rem" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>

    // <BrowserRouter>
    //   <p>Navbar</p>
    //   <Routes>
    //     <Route path="/" element={<div>HOME</div>} />
    //     <Route path="/contacto" element={<div>Contacto</div>} />
    //     <Route path="*" element={<div>Página no encontrada</div>} />
    //   </Routes>
    // </BrowserRouter>


  );
};

export default App;
