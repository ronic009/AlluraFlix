import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NewVideo from './Pages/NewVideo';
import Header from './Components/Header';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-video" element={<NewVideo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;