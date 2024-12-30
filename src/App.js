// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import WhyOrganize from './components/WhyOrganize';
// import WhatYouReceive from './components/WhatYouReceive';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              {/* <WhyOrganize />
              <WhatYouReceive /> */}
              <RegistrationForm />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
