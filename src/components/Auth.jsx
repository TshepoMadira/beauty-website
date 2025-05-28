import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store the token in localStorage
      localStorage.setItem('authToken', data.token);
      
      return data.user;
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

      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          firstName: userData.firstName,
          lastName: userData.lastName,
          phone: userData.phone
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Store the token in localStorage
      localStorage.setItem('authToken', data.token);
      
      return data.user;
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
        toast.success('Login successful!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Wait for 1.5 seconds before navigating to ensure toast is seen
        setTimeout(() => {
          navigate('/checkout', { replace: true });
        }, 1500);
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
        // Show success toast
        toast.success('Registration successful! Please login.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        
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
      }
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      <h2 className="auth-title">{isLogin ? 'Login' : 'Register'}</h2>
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