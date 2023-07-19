import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NivelBasico from './Components/NivelBasico';
import NivelIntermedio from './Components/NivelIntermedio';
import NivelAvanzado from './Components/NivelAvanzado';
import HomeComponent from './Components/HomeComponent';
import CrearPregunta from './Components/CrearPregunta';
import ResultadosComponent from './Components/ResultadosComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/basico" element={<NivelBasico />} />
          <Route path="/intermedio" element={<NivelIntermedio />} />
          <Route path="/basico" element={<NivelAvanzado />} />
          <Route path="/crear-pregunta" element={<CrearPregunta />} />
          <Route path="/resultados" element={<ResultadosComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;