// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import img1 from '../assets/img1.png';
import borderdown from '../assets/borderdown.png';
import borderup from '../assets/borderup.png';
 
function Hero() {
  return (
    <div className="home">
            <div className="border-up">
          <img src={borderup} alt="decoration" />
        </div>
      <section className="hero">
      <div className="hero-image">
          <img src={img1} alt="Constitution document" />
        </div>

        <div className="hero-content">
          <h1>Make an Impact</h1>
          <p>Join us in making history come alive! As an organizer, you'll play a pivotal role in bringing this transformative event to your community.</p>
          <div className="hero-buttons">
            <Link to="/book" className="btn-primary">Get Started</Link>
            <Link to="/signup" className="btn-secondary">Sign Up</Link>
          </div>
      </div> 
      </section>
      <div className="border-down">
  <img src={borderdown} alt="Border decoration" />
       </div>
      <section className="why-organize">
        <h2>Why Organize?</h2>
        <div className="benefits">
          <div className="benefit-item">
            <img src="/book-icon.png" alt="Book icon" />
            <h3>Promote awareness</h3>
            <p>of the Constitution</p>
          </div>
          <div className="benefit-item">
            <h3>Engage your community</h3>
            <p>in a meaningful way</p>
          </div>
          <div className="benefit-item">
            <h3>Be part of an impactful</h3>
            <p>initiative</p>
          </div>
        </div>
      </section>

      <section className="what-you-receive">
        <h2>What You'll Receive</h2>
        <div className="features">
          <div className="feature-item">
            <h3>All-in-one Package</h3>
            <ul>
              <li>Actors & Scripts from Artistic Humans</li>
              <li>Theatres booking & Assistance</li>
              <li>Branding & Marketing support</li>
              <li>A memorable experience for your audience</li>
              <li>Revenue from events</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
