import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signup.css"

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = () => {
    localStorage.setItem('user', JSON.stringify(formData));
    window.alert('Signup successful! You can now log in.');
    navigate('/login');
  };

  return (
    <div className="signup-container"> {/* Apply the class name here */}
      <h2>Signup</h2>
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default Signup;
