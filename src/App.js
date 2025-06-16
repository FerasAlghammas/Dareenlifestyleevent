
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import AboutUs from './AboutUs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {
  return (
    <Router>
      <header className="header">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/dareenlifestylelogo1.png`} alt="Dareen Lifestyle Logo" className="logo" />
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

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      <footer className="footer">
        &copy; 2025 DAREEN Lifestyle. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;

