// components/RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    occupation: '',
    venue: '',
    play: 'The Constitution Play',
    auditorium: '',
    dateandtime: ''
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
    <div className="registration-container">
      <h2 className="registration-title">Register as an Organizer</h2>
      
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

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Occupation</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Venue</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Auditorium</label>
          <input
            type="text"
            name="auditorium"
            value={formData.auditorium}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date and Time</label>
          <input
            type="datetime-local"
            name="dateandtime"
            value={formData.dateandtime}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`submit-button ${loading ? 'loading' : ''}`}
        >
          {loading ? 'Submitting...' : 'Register Now'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
