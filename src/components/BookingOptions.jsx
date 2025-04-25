// src/components/BookingOptions.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingOptions.css';

const BookingOptions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const service = location.state?.service;

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceCategory: service?.name || '', // Will be set from dropdown
    specificService: '',
    date: '',
    time: '',
    specialRequests: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    accessInstructions: '',
    multiplePeople: false
  });

  const serviceCategories = [
    'Hair Installation',
    'Nail Installation',
    'Make Up',
    'Multiple Services'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/checkout', {
      state: {
        service,
        formData
      }
    });
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">Book House Call Service</h2>
      
    
      <div className="appointment-form-container">
        <h3 className="form-title">House Call Request</h3>
        <p className="form-description">
          Have our beauty professionals come to you for personalized services.
        </p>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-section">
            <h4>Personal Information</h4>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h4>Service Information</h4>
            <div className="form-group">
              <label htmlFor="serviceCategory">Service Category</label>
              <select
                id="serviceCategory"
                name="serviceCategory"
                value={formData.serviceCategory}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a service category</option>
                {serviceCategories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="specificService">Service Details</label>
              <textarea
                id="specificService"
                name="specificService"
                value={formData.specificService}
                onChange={handleInputChange}
                placeholder="Please describe the specific services you need"
                rows="3"
                required
              />
            </div>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="multiplePeople"
                name="multiplePeople"
                checked={formData.multiplePeople}
                onChange={handleInputChange}
              />
              <label htmlFor="multiplePeople">Services for multiple people (additional fees may apply)</label>
            </div>
          </div>

          <div className="form-section">
            <h4>Location Information</h4>
            <div className="form-group">
              <label htmlFor="streetAddress">Street Address</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                placeholder="Enter your street address"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="ZIP Code"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="accessInstructions">Access Instructions (Optional)</label>
              <textarea
                id="accessInstructions"
                name="accessInstructions"
                value={formData.accessInstructions}
                onChange={handleInputChange}
                placeholder="Apartment number, gate code, parking information, etc."
                rows="2"
              />
            </div>
          </div>

          <div className="form-section">
            <h4>Appointment Details</h4>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests or Notes</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                placeholder="Any special requests or additional information"
                rows="3"
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Request House Call
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingOptions;