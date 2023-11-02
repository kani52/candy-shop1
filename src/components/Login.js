import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css'; // Import the CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loginStatus, setLoginStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    // Retrieve the user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem('user'));

    if (storedUserData) {
      if (
        formData.username === storedUserData.username &&
        formData.password === storedUserData.password
      ) {
        setLoginStatus('Login Successful');
      } else {
        setLoginStatus('Login Failed');
      }
    } else {
      setLoginStatus('User not found');
    }
  };

  return (
    <div className="login-container"> 
    <center>
      <h2>Login</h2>
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
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {loginStatus && <p>{loginStatus}</p>}
      <p>Don't have an account?</p>
      <ul>
        <li>
          <Link to="/signup" className="loginlink">Sign up</Link>
        </li>
      </ul>
      <br /><br /><br /><br /><br /><br /><br />
      </center>
    </div>
  );
};

export default Login;
