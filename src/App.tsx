import React, { useState } from 'react';
import { NotasProvider } from './NotasContexto'; // Actualiza esta ruta o crea el contexto necesario
import AppBar from './AppBar';
import PanelAgregarNota from './PanelAgregarNotas';
import PanelColeccionNotas from './PanelColeccionNotas';
import guardar from './guardar.png';
import './App.css'; // Importa el archivo CSS para los estilos

const App: React.FC = () => {
  const [mostrarPanelAgregar, setMostrarPanelAgregar] = useState(false);
  const [mostrarPanelColeccion, setMostrarPanelColeccion] = useState(false);

  return (
    <NotasProvider>
      <div className="app-container">
        <AppBar />
        <div className="button-container">
          <button className="styled-button" onClick={() => setMostrarPanelAgregar(true)}>
            <img src={guardar} alt="Agregar Nota" style={{ width: '20px', height: '20px', color: 'black' }} />
          </button>
          <button className="styled-button" onClick={() => setMostrarPanelColeccion(true)}>
            Ver notas
          </button>
        </div>
        {mostrarPanelAgregar && <PanelAgregarNota onClose={() => setMostrarPanelAgregar(false)} />}
        {mostrarPanelColeccion && <PanelColeccionNotas onClose={() => setMostrarPanelColeccion(false)} />}
      </div>
    </NotasProvider>
  );
};

export default App;
