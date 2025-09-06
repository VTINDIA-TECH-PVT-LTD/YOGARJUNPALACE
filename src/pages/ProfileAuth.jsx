import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [inputCaptcha, setInputCaptcha] = useState('');

  // Generate captcha when component mounts or refresh
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
    if (!isLogin && !formData.name) errs.name = 'Name is required';
    if (!inputCaptcha) errs.captcha = 'Captcha is required';
    else if (inputCaptcha !== captcha) errs.captcha = 'Captcha does not match';
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
        const response = await axios.post('/api/login', {
          email: formData.email,
          password: formData.password,
        });
        setMessage(response.data.message || 'Login successful!');
      } else {
        const response = await axios.post('/api/register', {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        setMessage(response.data.message || 'Registration successful!');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred.');
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
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
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
              {errors.name && <p style={{
                color: '#d9534f',
                fontSize: '0.85rem',
                marginTop: '-5px',
                marginBottom: '10px',
              }}>{errors.name}</p>}
            </div>
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

          {/* Captcha Section */}
          {/* <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '20px 0',
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0)',
              padding: '10px 20px',
              fontFamily: 'monospace',
              fontSize: '1.2rem',
              letterSpacing: '2px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              userSelect: 'none',
            }}>{captcha}</div>
            <button
              type="button"
              onClick={refreshCaptcha}
              title="Refresh Captcha"
              style={{
                marginLeft: '10px',
                padding: '8px 12px',
                fontSize: '1rem',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: '#2c5f2d',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              ↻
            </button>
          </div>
          <input
            type="text"
            name="inputCaptcha"
            placeholder="Enter Captcha"
            value={inputCaptcha}
            onChange={(e) => setInputCaptcha(e.target.value)}
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
          {errors.captcha && <p style={{
            color: '#d9534f',
            fontSize: '0.85rem',
            marginTop: '-5px',
            marginBottom: '10px',
          }}>{errors.captcha}</p>} */}

          <button type="submit" style={{
            backgroundColor: '#ce9626ff',
            color: '#fff',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease',
          }}>
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        {message && <p style={{
          color: '#28a745',
          marginTop: '15px',
          fontSize: '0.95rem',
        }}>{message}</p>}

        <div style={{
          marginTop: '20px',
        }}>
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
    </div>
  );
};

export default ProfileAuth;
