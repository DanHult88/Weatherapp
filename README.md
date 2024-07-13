# Weatherapp

This project is a simple Weather App built with React that allows users to fetch and display current weather information for a specific city using the OpenWeatherMap API.

Features
Search Bar: Enter a city name to fetch weather data.
Weather Display: Shows temperature and weather condition for the searched city.
Error Handling: Displays an error message if there's an issue fetching data.
Getting Started
To run this project locally and explore its features, follow these steps:

Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js
npm (Node Package Manager) or yarn
Installation
Clone the repository to your local machine:

bash
Kopiera kod
git clone https://github.com/your-username/weather-app.git
Navigate into the project directory:

bash
Kopiera kod
cd weather-app
Install dependencies using npm or yarn:

bash
Kopiera kod
npm install
# or
yarn install
Usage
Obtain an API key from OpenWeatherMap by signing up for a free account.

Create a .env file in the root directory of the project and add your API key:

bash
Kopiera kod
REACT_APP_API_KEY=e75e622952eebee5e9cc0c247825fbcd
Replace e75e622952eebee5e9cc0c247825fbcd with your actual OpenWeatherMap API key.

Start the development server:

bash
Kopiera kod
npm start
# or
yarn start
Open your browser and visit http://localhost:3000 to view the Weather App.

Enter a city name in the search bar and click "Search" to fetch and display the weather information for that city.

Project Structure
App.js: Main component that handles state and API communication.
SearchBar.js: Component for user input and triggering weather data fetch.
WeatherDisplay.js: Component to display weather information fetched from the API.
Technologies Used
React
Axios (for API requests)
CSS (for basic styling)
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Weather data provided by OpenWeatherMap API.
