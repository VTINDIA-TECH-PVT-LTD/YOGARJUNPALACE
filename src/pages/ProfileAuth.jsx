import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ProfileAuth = () => {
  const navigate = useNavigate(); 
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [inputCaptcha, setInputCaptcha] = useState('');

  useEffect(() => {
    refreshCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.email) errs.email = 'Email is required';
    if (!formData.password) errs.password = 'Password is required';
    if (!isLogin) {
      if (!formData.firstName) errs.firstName = 'First Name is required';
      if (!formData.lastName) errs.lastName = 'Last Name is required';
      if (!formData.phone) errs.phone = 'Phone Number is required';
      if (!termsAccepted) errs.terms = 'You must accept Terms & Conditions';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateForm();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setMessage('');

    try {
      if (isLogin) {
        // 🔹 LOGIN API call
        const response = await axios.post("/api/login", {
          email: formData.email,
          password: formData.password,
        });

        if (response.data.status) {
          setMessage(response.data.message || "Login successful!");

          // Save user details in localStorage
          localStorage.setItem("user", JSON.stringify(response.data.data));
          navigate("/");
        } else {
          setMessage(response.data.message || "Login failed!");
        }
      } else {
        // 🔹 SIGNUP API call
        const response = await axios.post("/api/signup", {
          f_name: formData.firstName,
          l_name: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          password: formData.password,
        });

        if (response.data.status) {
          setMessage(response.data.message || "Registration successful!");

          // Save user details in localStorage
          localStorage.setItem("user", JSON.stringify(response.data.data));

          // Switch back to login after successful signup
          setIsLogin(true);
        } else {
          setMessage(response.data.message || "Registration failed!");
        }
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: "url('/uploads/slider7.jpg')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      padding: '20px',
    }}>
      <div style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '30px 40px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
        fontFamily: "'Arial', sans-serif",
      }}>
        <h2 style={{
          marginBottom: '20px',
          color: '#eaae2aff',
          fontWeight: 'bold',
        }}>{isLogin ? 'Login' : 'Register'}</h2>

        <form onSubmit={handleSubmit} noValidate>
          {!isLogin && (
            <>
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    margin: '10px 0',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    outline: 'none',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    color: '#f5f5f5ff',
                  }}
                />
                {errors.firstName && <p style={{
                  color: '#d9534f',
                  fontSize: '0.85rem',
                  marginTop: '-5px',
                  marginBottom: '10px',
                }}>{errors.firstName}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    margin: '10px 0',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    outline: 'none',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    color: '#f5f5f5ff',
                  }}
                />
                {errors.lastName && <p style={{
                  color: '#d9534f',
                  fontSize: '0.85rem',
                  marginTop: '-5px',
                  marginBottom: '10px',
                }}>{errors.lastName}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    margin: '10px 0',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    outline: 'none',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    color: '#f5f5f5ff',
                  }}
                />
                {errors.phone && <p style={{
                  color: '#d9534f',
                  fontSize: '0.85rem',
                  marginTop: '-5px',
                  marginBottom: '10px',
                }}>{errors.phone}</p>}
              </div>
            </>
          )}

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 15px',
                margin: '10px 0',
                border: '1px solid #ccc',
                borderRadius: '6px',
                fontSize: '1rem',
                outline: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0)',
                color: '#f5f5f5ff',
              }}
            />
            {errors.email && <p style={{
              color: '#d9534f',
              fontSize: '0.85rem',
              marginTop: '-5px',
              marginBottom: '10px',
            }}>{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 15px',
                margin: '10px 0',
                border: '1px solid #ccc',
                borderRadius: '6px',
                fontSize: '1rem',
                outline: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0)',
                color: '#f5f5f5ff',
              }}
            />
            {errors.password && <p style={{
              color: '#d9534f',
              fontSize: '0.85rem',
              marginTop: '-5px',
              marginBottom: '10px',
            }}>{errors.password}</p>}
          </div>

          {!isLogin && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              margin: '10px 0',
              textAlign: 'left',
            }}>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                style={{ marginRight: '10px' }}
              />
              <span style={{ color: '#f5f5f5ff', fontSize: '0.9rem' }}>
                I accept the Terms & Conditions
              </span>
            </div>
          )}
          {errors.terms && <p style={{
            color: '#d9534f',
            fontSize: '0.85rem',
            marginTop: '-5px',
            marginBottom: '10px',
          }}>{errors.terms}</p>}

          <button type="submit" style={{
            backgroundColor: '#ce9626ff',
            color: '#fff',
            border: 'none',
            padding: '14px 28px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            width: '100%',
            maxWidth: '300px',
            marginTop: '15px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#b47c1d')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#ce9626ff')}
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        {/* 🔹 Attractive Message Box */}
        {message && (
          <div
            style={{
              backgroundColor: message.toLowerCase().includes("success")
                ? "#d4edda"
                : "#f8d7da",
              color: message.toLowerCase().includes("success")
                ? "#155724"
                : "#721c24",
              border: `1px solid ${
                message.toLowerCase().includes("success") ? "#c3e6cb" : "#f5c6cb"
              }`,
              padding: "12px 18px",
              borderRadius: "8px",
              marginTop: "15px",
              fontSize: "0.95rem",
              fontWeight: "500",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              animation: "fadeIn 0.5s ease-in-out",
            }}
          >
            {message}
          </div>
        )}

        <div style={{ marginTop: '20px' }}>
          {isLogin ? (
            <>
              <button
                onClick={() => alert('Forgot password flow')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ecedecff',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  fontSize: '0.9rem',
                  padding: 0,
                }}
              >
                Forgot Password?
              </button>
              <p style={{
                fontSize: '0.9rem',
                color: '#f0ededff',
              }}>
                Not registered yet?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ecedecff',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    fontSize: '0.9rem',
                    padding: 0,
                  }}
                >
                  Register here
                </button>
              </p>
            </>
          ) : (
            <p style={{
              fontSize: '0.9rem',
              color: '#f0ededff',
            }}>
              Already have an account?{' '}
              <button
                onClick={() => setIsLogin(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ecedecff',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  fontSize: '0.9rem',
                  padding: 0,
                }}
              >
                Login here
              </button>
            </p>
          )}
        </div>
      </div>

      {/* 🔹 Fade In Animation CSS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default ProfileAuth;
