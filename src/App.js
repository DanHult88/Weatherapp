import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './Components/SearchBar';
import WeatherDisplay from './Components/WeatherDisplay';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'e75e622952eebee5e9cc0c247825fbcd'; 
  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;
