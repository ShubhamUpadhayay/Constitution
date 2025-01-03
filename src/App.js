import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Hero from './components/Hero';
import RegistrationForm from './components/RegistrationForm';
import './App.css';
import Footer from './components/Footer';


function App() {
  const registrationFormRef = useRef(null);
  const whyOrganizeRef = useRef(null);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/organize" 
            element={
              <>
                <Hero 
                  registrationFormRef={registrationFormRef}
                  whyOrganizeRef={whyOrganizeRef}
                />
                <RegistrationForm ref={registrationFormRef} />
                <Footer/>
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;