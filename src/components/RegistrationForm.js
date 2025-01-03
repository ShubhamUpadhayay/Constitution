import React, { forwardRef, useState } from 'react';import axios from 'axios';
import './RegistrationForm.css';

const RegistrationForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    occupation: '',
    venue: '',
    play: 'The Constitution Play',
    auditorium: '',
    date: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/users', formData);
      if (response.status === 201) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phonenumber: '',
          occupation: '',
          venue: '',
          play: 'The Constitution Play',
          auditorium: '',
          dateandtime: ''
        });
      }
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
    ref={ref} 
    className="form-container"
  >
      <div className="form-header">
        <h1>Ready to take the next step? Fill out the<br/> form below to start organizing your event.</h1>
      </div>

      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-row">
          <div className="form-select-wrapper">
            <select
              name="play"
              value={formData.play}
              onChange={handleChange}
              required
            >
              <option value="">Select Play</option>
              <option value="The Constitution Play">The Constitution Play</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h1>Have Plan on mind already? Select Preffered Options:</h1>
          <div className="form-row two-columns">
            <div className="form-select-wrapper">
              <select
                name="auditorium"
                value={formData.auditorium}
                onChange={handleChange}
                required
              >
                <option value="">Select Auditorium</option>
                <option value="Auditorium 1">Auditorium 1</option>
                <option value="Auditorium 2">Auditorium 2</option>
              </select>
            </div>
            <div className="form-select-wrapper">
              <input
                type="datetime-local"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="date-input"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="separator">
            <span>OR</span>
          </div>
         
          <h3>Preffered Venue:</h3>
          <div className="form-select-wrapper">
              <select
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                required
              >
                <option value="">Select City</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                <option value="jaipur">Jaipur</option>
                <option value="delhi">Delhi</option>
                 <option value="kolkata">Kolkata</option>
              </select>
            </div>
        </div>

        <div className="form-section">
          <h3>Personal Details:</h3>
          <div className="form-row">
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Full Name"
      required
    />
  </div>
  <div className="form-row">
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email"
      required
    />
  </div>
          <div className="form-row">
            <input
              type="tel"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="form-row">
            <div className="form-select-wrapper">
              <select
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
              >
                <option value="">Occupation</option>
                <option value="Student">Student</option>
                <option value="Professional">Professional</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {success && (
        <div className="success-message">
          Registration successful! We'll contact you soon.
        </div>
      )}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

        <button
          type="submit"
          disabled={loading}
          className="submit-button"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>

      </form>
      
    </div>
  );
});

export default RegistrationForm;