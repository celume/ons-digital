import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
