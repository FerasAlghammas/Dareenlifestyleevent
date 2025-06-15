
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import AboutUs from './AboutUs';
import './App.css';
import logo from './assets/dareenlifestylelogo1.png';


function App() {
  return (
    <Router>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Dareen Lifestyle Logo" className="logo" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <footer className="footer">
        &copy; 2025 DAREEN Lifestyle. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;

