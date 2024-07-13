import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  const { name, main, weather } = weatherData;
  const temperature = main.temp;
  const description = weather[0].description;

  return (
    <div>
      <h2>Weather in {name}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {description}</p>
    </div>
  );
};

export default WeatherDisplay;
