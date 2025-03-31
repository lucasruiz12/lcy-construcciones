import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from './pages/Home';
import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h3: { fontSize: "3rem", fontWeight: 600, "@media (max-width:600px)": { fontSize: "2.5rem" }, },
    h4: { fontSize: "2.5rem", fontWeight: 600, textAlign: "center", "@media (max-width:600px)": { fontSize: "2rem" }, },
    body1: { fontSize: "1.25rem", textAlign: "justify", "@media (max-width:600px)": { fontSize: "1rem" }, },
    button: { textTransform: "none", fontSize: "1rem" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
