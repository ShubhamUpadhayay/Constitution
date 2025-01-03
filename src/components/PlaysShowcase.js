import React, { useState } from 'react';
import './PlaysShowcase.css';
import rashtra from '../assets/rashtra.png';
import { useNavigate } from 'react-router-dom';


const PlaysShowcase = () => {
  const [selectedPlay, setSelectedPlay] = useState(null); 
  const navigate = useNavigate();

  const plays = [
    {
      id: 1,
      title: "Rashtragranth: The Journey of India's Constitution",
      image: rashtra,
      description: "\"Rashtragranth: The Journey of India's Constitution\" is a transformative theatrical experience crafted by Artistic Humans to inspire, educate, and connect communities. This brochure showcases the play's powerful narrative, highlighting its universal relevance, educational impact, and cultural significance. Featuring insights from award-winning creators, testimonials, and a call-to-action for partnerships, it invites NGOs, trusts, law colleges, and organizations to collaborate in promoting awareness and unity through this impactful production.",
      buttons: [
        { text: "Check tickets", variant: "light" },
        { text: "Organise Plays", variant: "dark" }
      ]
    },
  ];

  return (
    <div className="plays-container">
      <h2 className="plays-title">Our Plays</h2>
      
      <div className="plays-grid">
        {plays.map((play) => (
          <div key={play.id} 
               className={`play-card ${selectedPlay === play.id ? 'play-card-expanded' : ''}`}>
            {/* Image Section */}
            <div className={`play-image-section ${selectedPlay === play.id ? 'play-image-expanded' : ''}`}>
              <img 
                src={play.image} 
                alt={play.title}
                className="play-image"
                onClick={() => setSelectedPlay(selectedPlay === play.id ? null : play.id)}
              />
            </div>

            {/* Content Section - Only shown when play is selected */}
            {selectedPlay === play.id && (
              <div className="play-content">
                <h3 className="play-title">{play.title}</h3>
                <p className="play-description">{play.description}</p>
                <div className="play-buttons">
                  {play.buttons.map((button, index) => (
                    <button
                      key={index}
                      className={`button ${
                        button.variant === 'light' 
                          ? 'button-light' 
                          : 'button-dark'
                      }`} onClick={() => navigate('/organize')}
                    >
                      {button.text}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaysShowcase;