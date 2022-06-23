// import Menu from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Camisas from "./pages/Camisas";
import Calcas from "./pages/Calcas";
import Meias from "./pages/Meias";
import Shorts from "./pages/Shorts";
import Acessorios from "./pages/Acessorios";
import Index from "./pages/Index";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { initState } from "./state.js";
function App() {
  initState();
  return (
    <div>
      <BrowserRouter>
        <AppBar className="mb-5" color="primary" position="static">
          <Toolbar>
            <Link className="no-underline mx-3" to="/shorts">
              Shorts
            </Link>
            <Link className="no-underline mx-3" to="/camisas">
              Camisas
            </Link>
            <Link className="no-underline mx-3" to="/calcas">
              Calças
            </Link>
            <Link className="no-underline mx-3" to="/acessorios">
              Acessórios
            </Link>
            <Link className="no-underline mx-3" to="/meias">
              Meias
            </Link>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/camisas" element={<Camisas />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/calcas" element={<Calcas />} />
            <Route path="/meias" element={<Meias />} />
            <Route path="/acessorios" element={<Acessorios />} />
            <Route path="/" element={<Index />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
