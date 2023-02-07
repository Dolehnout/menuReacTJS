import { Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./components/Inicio";
import Mision from "./components/Mision";
import Navegacion from "./components/Navegacion";
import Saludos from "./components/Saludos";
import Vision from "./components/Vision";

function App() {
  return (
    <div className="App">
      <Navegacion></Navegacion>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/saludos" element={<Saludos />} />
        <Route path="/mision" element={<Mision />} />
        <Route path="/vision-pucese" element={<Vision />} />
      </Routes>
    </div>
  );
}

export default App;
