import React from 'react';
import './LandingPage.css';
import Navbar from './Navbar';
import borderdown from '../assets/borderdown.png';
import borderup from '../assets/borderup.png';
import mainconst from '../assets/mainconst.png';
import eye from '../assets/eye.png';
import goldenbook from '../assets/goldenbook.png';
import heart from '../assets/heart.png';
import human1 from '../assets/human1.png';
import human2 from '../assets/human2.png';
import human3 from '../assets/human3.png';
import Footer from './Footer';
import PlaysShowcase from './PlaysShowcase';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className='main'>
      <Navbar/>
      <section className="hero-section relative">
        <div className="border-up">
          <img src={borderup} alt="decoration" />
        </div>
        <div className="main-content relative">
          <div className='mainconst relative'>
            <img src={mainconst} alt="The Constitution Play" className="w-full" />
            
            <div className="promo-boxes ">
              <div className="promo-box bg-white rounded-lg p-6 shadow-lg max-w-sm">
              <img src={borderup} alt="decoration" />
                <h3 className="text-xl promo-text font-semibold mb-3">Experience History Like Never Before</h3>
                <p className="text-gray-600 promo-text mb-4">Join us for a captivating play that brings the Constitution to life.</p>
                <div className='button'>
                <button className="check-tickets-btn">Check tickets</button>
                </div>
              </div>
              
              <div className="promo-box ">
              <img src={borderup} alt="decoration" />
                <h3 className="text-xl promo-text1 font-semibold mb-3">Make an Impact</h3>
                <p className="mb-4 promo-text1">Organise, and contribute to this transformative event</p>
                <div className='button'>
                <button 
              className="organize-event-btn"
              onClick={() => navigate('/organize')}>
              Organise Plays
            </button>
            </div>
            </div>
            </div>
          </div>
        </div>
        <div className='border-down'>
          <img src={borderdown} alt="decoration" />
        </div>
      </section>

      <div className='our-play'>
        <PlaysShowcase/>
      </div>

      <div className='about-play'>
        <h2>About the Play</h2>
      </div>

      <div className='circle-pattern'>
        <div className="circle1">
          <h3 className="circle-title">Interactive storytelling</h3>
        </div>
        <div className="circle2">
          <h3 className="circle-title">Visual effects that bring history to life</h3>
        </div>
        <div className="circle3">
          <h3 className="circle-title">Engaging performances by top artists</h3>
        </div>
      </div>

      <div className='small'>
        <div className='small-circle'>
          <img src={goldenbook} alt="decoration" />
        </div>
        <div className='small-circle2'>
          <img src={eye} alt="decoration" />
        </div>
      </div>

      <div className='actor-circles'>
        <div className='male-actor'><img src={human1} alt="decoration" /></div>
        <div className='actress1'><img src={human2} alt="decoration" /></div>
        <div className='actress2'><img src={human3} alt="decoration" /></div>
      </div>

      <div className='heart'>
        <img src={heart} alt="decoration" />
      </div>

      <div className='conclusion'>
        <p>
          Two forces unite to embody the heart and soul of the
          Constitution Play: Artistic Humans and Red Fibre. Artistic
          Humans' enthralling performances bring the theater's
          stories to life, while Red Fibre crafts traditional branding strategies
          that act as a gateway to inspiration. To mesmerise, to galvanise, and to enlighten,
          is what we aim together. To present the rich, powerful and timeless relevance of the Constitution.
          Our mission is to create opportunities that enrich the mind and the soul, spark conversation and
          leave a lasting impression on every soul we touch.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;