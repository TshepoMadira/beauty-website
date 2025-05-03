import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Auth.css';

export default function Auth() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: ''
  });
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Get the intended redirect path or default to '/'
  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Check if form is valid based on current mode (login/register)
  const isFormValid = () => {
    if (isLogin) {
      // For login, just check email and password
      return formData.email.trim() && formData.password.trim();
    } else {
      // For register, check all required fields
      return (
        formData.email.trim() && 
        formData.password.trim() && 
        formData.firstName.trim() && 
        formData.lastName.trim() && 
        formData.phone.trim()
      );
    }
  };

  // Basic password validation
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // Email validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const login = async (email, password) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.email === email && u.password === password);
      
      if (!user) {
        throw new Error('Invalid email or password');
      }
      
      // Store minimal user data in localStorage
      localStorage.setItem('authToken', JSON.stringify({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        expires: Date.now() + 24 * 60 * 60 * 1000 // 24 hours from now
      }));
      
      return user;
    } catch (err) {
      throw err;
    }
  };

  const signup = async (email, password, userData) => {
    try {
      if (!validateEmail(email)) {
        throw new Error('Please enter a valid email address');
      }
      
      if (!validatePassword(password)) {
        throw new Error('Password must be at least 6 characters');
      }

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      const userExists = users.some(u => u.email === email);
      if (userExists) {
        throw new Error('Email already in use');
      }
      
      const newUser = {
        id: Date.now().toString(),
        email,
        password, // Note: In a real app, never store plain text passwords
        ...userData,
        createdAt: new Date().toISOString()
      };
      
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      // Also log the user in immediately
      localStorage.setItem('authToken', JSON.stringify({
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        expires: Date.now() + 24 * 60 * 60 * 1000 // 24 hours from now
      }));
      
      return newUser;
    } catch (err) {
      throw err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      if (isLogin) {
        await login(formData.email, formData.password);
        navigate('/checkout', { replace: true }); // Redirect to intended page or home
      } else {
        await signup(
          formData.email, 
          formData.password, 
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone
          }
        );
        // After successful registration, switch to login view
        setIsLogin(true);
        // Clear password field but keep email
        setFormData(prev => ({
          ...prev,
          password: '',
          firstName: '',
          lastName: '',
          phone: ''
        }));
        // Show success message
        setError('Registration successful! Please login.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">{isLogin ? 'Login' : 'Register'}</h2>
      {error && <div className="auth-error">{error}</div>}
      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="auth-input"
              style={{ color: '#333' }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="auth-input"
              style={{ color: '#333' }}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="auth-input"
              style={{ color: '#333' }}
            />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="auth-input"
          style={{ color: '#333' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
          className="auth-input"
          style={{ color: '#333' }}
        />
        <button 
          type="submit" 
          className="auth-submit-btn"
          disabled={isLoading || !isFormValid()}
        >
          {isLoading ? 'Processing...' : isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <div className="auth-toggle-container">
        {isLogin ? (
          <span onClick={() => {
            setIsLogin(false);
            setError('');
          }} className="auth-toggle-link">
            Need an account? Register
          </span>
        ) : (
          <span onClick={() => {
            setIsLogin(true);
            setError('');
          }} className="auth-toggle-link">
            Already have an account? Login
          </span>
        )}
      </div>
    </div>
  );
}