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
  const [errors, setErrors] = useState({}); // Changed to object to track field-specific errors
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const isFormValid = () => {
    if (isLogin) {
      return formData.email.trim() && formData.password.trim();
    } else {
      return (
        formData.email.trim() && 
        formData.password.trim() && 
        formData.firstName.trim() && 
        formData.lastName.trim() && 
        formData.phone.trim()
      );
    }
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

      // First check if the response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(text || 'Server returned an invalid response');
      }

      const data = await response.json();

      if (!response.ok) {
        // Handle field-specific errors from backend
        if (data.errors) {
          const backendErrors = {};
          data.errors.forEach(err => {
            backendErrors[err.path] = err.msg;
          });
          setErrors(backendErrors);
          throw new Error('Please fix the validation errors');
        }
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('authToken', data.token);
      return data.user;
    } catch (err) {
      // Handle common error cases
      let errorMessage = err.message;
      if (errorMessage.includes('DOCTYPE')) {
        errorMessage = 'Server error occurred. Please try again later.';
      } else if (err instanceof SyntaxError) {
        errorMessage = 'Invalid server response. Please try again.';
      }
      throw new Error(errorMessage);
    }
  };

  const signup = async (email, password, userData) => {
    try {
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

      // First check if the response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(text || 'Server returned an invalid response');
      }

      const data = await response.json();

      if (!response.ok) {
        // Handle field-specific errors from backend
        if (data.errors) {
          const backendErrors = {};
          data.errors.forEach(err => {
            backendErrors[err.path] = err.msg;
          });
          setErrors(backendErrors);
          throw new Error('Please fix the validation errors');
        }
        throw new Error(data.message || 'Registration failed');
      }

      localStorage.setItem('authToken', data.token);
      return data.user;
    } catch (err) {
      // Handle common error cases
      let errorMessage = err.message;
      if (errorMessage.includes('DOCTYPE')) {
        errorMessage = 'Server error occurred. Please try again later.';
      } else if (err instanceof SyntaxError) {
        errorMessage = 'Invalid server response. Please try again.';
      }
      throw new Error(errorMessage);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
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
        toast.success('Registration successful! Please login.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        
        setIsLogin(true);
        setFormData(prev => ({
          ...prev,
          password: '',
          firstName: '',
          lastName: '',
          phone: ''
        }));
      }
    } catch (err) {
      // Don't show toast if we have field-specific errors (they'll be shown inline)
      if (!Object.keys(errors).length) {
        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to render error message for a field
  const renderError = (fieldName) => {
    return errors[fieldName] ? (
      <div className="error-message">{errors[fieldName]}</div>
    ) : null;
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
              className={`auth-input ${errors.firstName ? 'error' : ''}`}
              style={{ color: '#333' }}
            />
            {renderError('firstName')}
            
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={`auth-input ${errors.lastName ? 'error' : ''}`}
              style={{ color: '#333' }}
            />
            {renderError('lastName')}
            
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`auth-input ${errors.phone ? 'error' : ''}`}
              style={{ color: '#333' }}
            />
            {renderError('phone')}
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`auth-input ${errors.email ? 'error' : ''}`}
          style={{ color: '#333' }}
        />
        {renderError('email')}
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
          className={`auth-input ${errors.password ? 'error' : ''}`}
          style={{ color: '#333' }}
        />
        {renderError('password')}
        
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
            setErrors({});
          }} className="auth-toggle-link">
            Need an account? Register
          </span>
        ) : (
          <span onClick={() => {
            setIsLogin(true);
            setErrors({});
          }} className="auth-toggle-link">
            Already have an account? Login
          </span>
        )}
      </div>
    </div>
  );
}