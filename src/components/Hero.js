import React from 'react'; // Changed from useRef to just React
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Hero.css';
import img1 from '../assets/img1.png';
import borderdown from '../assets/borderdown.png';
import borderup from '../assets/borderup.png';
import bookop from '../assets/book.png';
import second from '../assets/second.png';


function Hero({ registrationFormRef, whyOrganizeRef }) { // Added whyOrganizeRef to props
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };
  return (
    <div className="home">
      <Navbar/>
      <div className="border-up">
        <img src={borderup} alt="decoration" />
      </div>
      <section className="hero">
        <div className="hero-image">
          <img src={img1} alt="Constitution document" />
        </div>
        <div className="hero-content">
          <div>
            <h1>Make an </h1>
            <span> Impact </span>
          </div>
          <div className='hero-content-para'>
            <p>Join us in making history come alive! As an organizer, you'll play a pivotal role in bringing this transformative event to your community.</p>
          </div>
          <div className="hero-buttons">
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault(); 
                whyOrganizeRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Get started
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                registrationFormRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
      <div className="border-down">
        <img src={borderdown} alt="Border decoration" />
      </div>
      <section ref={whyOrganizeRef} className="why-organize">
       <h2>Why Organize?</h2>
<div className='why'>         
  <div className="benefit">
    <img src= {bookop} alt="Book icon" />
    <div className="benefit-item">
<p><strong>Promote</strong> awareness of the Constitution</p>
<p><strong>Engage</strong> your community in a meaningful way</p>
<p>Be part of an impactful <strong>initiative</strong> </p>
</div>
  </div>
</div>
</section>

<section className="why-organize2">
<h2>What you'll Receive</h2>
<div className='why'>         
  <div className="benefit2">
    <img src= {second} alt="Book icon" /> 
  <div className="benefit-item2">
  <p><strong>All-in-one</strong> Package</p>
  <p><strong>Actors & Scripts</strong> from Artistic Humans</p> 
  <p><strong>Theatres</strong> booking & Assistance </p>
  <p><strong>Branding & Marketing</strong> support from Red Fibre</p>
  <p>A memorable <strong>experience</strong> for your audience.</p>
  <p><strong>Revenue</strong> from events</p>
  </div>
  </div>

</div>
</section>

{/* ///////// */}
</div>

);

}
export default Hero;
