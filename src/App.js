import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Home from './Pages/Home';
import NewVideo from './Pages/NewVideo';  // Asegúrate de tener este componente

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuevo-video" element={<NewVideo />} />  {/* Añadir ruta para nuevo video */}
          {/* Añade otras rutas aquí si es necesario */}
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
