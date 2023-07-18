import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preguntas from './components/PreguntasBasicas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/preg" element={<Preguntas />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
