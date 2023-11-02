import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('Delhi'); 
  const apiKey = '41ff202c2f740c8b2ec27e87d2bab948'; 

  const getWeatherData = () => {
    setLoading(true);
    axios
      .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`)
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getWeatherData();
  }, []); // This fetches weather data on the initial load

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherData();
  };

  return (
    <div>
      <h2>Weather Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a location"
          value={location}
          onChange={handleLocationChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {weather && (
        <div>
          <h3>Current Weather</h3>
          <p>City: {weather.location?.name || 'N/A'}</p>
          <p>Temperature: {weather.current?.temperature || 'N/A'}°C</p>
          <p>Weather: {weather.current?.weather_descriptions[0] || 'N/A'}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;






