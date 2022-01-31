import './App.css';
import Home from './view/home/Home';
import CadComrpomisso from './view/cadCompromisso/CadComrpomisso';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path="/home" element={<Home />} />
          <Route path="invoices/:invoiceId" element={<CadComrpomisso />} />
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Pagina não encontrada!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
