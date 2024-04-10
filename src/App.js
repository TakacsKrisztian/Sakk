import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import AddPlayer from './Pages/AddPlayer';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {Navbar}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-player" element={<AddPlayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;