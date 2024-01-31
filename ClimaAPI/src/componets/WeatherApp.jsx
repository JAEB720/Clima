import React, { useState, useEffect } from 'react';
import '../App.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = () => {
    const API_KEY = '578b66de168bd6acfc917ef82ebbba46'; 

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

          fetch(url)
            .then(response => response.json())
            .then(data => {
              setWeatherData(data);
            })
            .catch(error => {
              console.log('Error fetching weather data:', error);
            });
        },
        error => {
          console.log('Error getting geolocation:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported');
    }
  };

  const toggleTemperature = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      {weatherData ? (
        <WeatherData
          weatherData={weatherData}
          isCelsius={isCelsius}
          toggleTemperature={toggleTemperature}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const WeatherData = ({ weatherData, isCelsius, toggleTemperature }) => {
  const country = weatherData.sys.country;
  const city = weatherData.name;
  const description = weatherData.weather[0].description;
  const humidity = weatherData.main.humidity;
  const windSpeed = weatherData.wind.speed;
  const iconCode = weatherData.weather[0].icon;
  const temperatureC = weatherData.main.temp; 
  const temperatureF = (temperatureC * 9) / 5 + 32;

  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

  return (
    <div className='Datos'>
      <p>Country: {country}</p>
      <p>City: {city}</p>
      <p className='One'>Description: {description}</p>
      <p className='Two'>Humidity: {humidity}%</p>
      <p className='Three'>Wind Speed: {windSpeed} m/s</p>
      <p className='Four'>weather conditions:</p>
      <img src={iconUrl} alt="Weather Icon" className='img1' />
      <p className='Five'>
        Temperature: {isCelsius ? `${temperatureC.toFixed(0)} °C` : `${temperatureF.toFixed(0)} °F`}
      </p>
      <button onClick={toggleTemperature}>
        change to ({isCelsius ? 'Fahrenheit' : 'Celsius'})
      </button>
    </div>
  );
};



export default WeatherApp;























// import React, { useState } from 'react';

// const WeatherSearch = ({ onSearch }) => {
//   const [ciudad, setCiudad] = useState('');
//   const [pais, setPais] = useState('');

//   const handleSearch = () => {
//     if (ciudad.trim() !== '' && pais.trim() !== '') {
//       onSearch(ciudad, pais);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Ciudad"
//         value={ciudad}
//         onChange={(e) => setCiudad(e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="País"
//         value={pais}
//         onChange={(e) => setPais(e.target.value)}
//       />

//       <button onClick={handleSearch}>Buscar Clima</button>
//     </div>
//   );
// };

// const WeatherApp = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [isCelsius, setIsCelsius] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   const searchWeather = async (ciudad, pais) => {
//     try {
//       const apiKey = '578b66de168bd6acfc917ef82ebbba46'; 

//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;

//       setIsLoading(true);

//       const response = await fetch(url);
//       const weatherData = await response.json();

//       setWeatherData(weatherData);
//       setIsLoading(false);
//     } catch (error) {
//       console.error(error);
//       setIsLoading(false);

//     }
//   };

//   const toggleTemperature = () => {
//     setIsCelsius(!isCelsius);
//   };

//   return (
//     <div className="container">
//       <h2>App</h2>

//       <WeatherSearch onSearch={searchWeather} />

//       {isLoading ? (
//         <p>Cargando...</p>
//       ) : weatherData ? (
//         <WeatherData
//           weatherData={weatherData}
//           isCelsius={isCelsius}
//           toggleTemperature={toggleTemperature}
//         />
//       ) : (
//         <p className='Busqueda'>No se ha realizado ninguna búsqueda.</p>
//       )}
//     </div>
//   );
// };

// const WeatherData = ({ weatherData, isCelsius, toggleTemperature }) => {
//   const country = weatherData.sys.country;
//   const city = weatherData.name;
//   const description = weatherData.weather[0].description;
//   const humidity = weatherData.main.humidity;
//   const windSpeed = weatherData.wind.speed;
//   const iconCode = weatherData.weather[0].icon;
//   const temperatureK = weatherData.main.temp;
//   const temperatureC = temperatureK - 273.15;
//   const temperatureF = (temperatureC * 9) / 5 + 32;

//   const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

//   return (
//     <div className='Datos'>
//       <p>Country: {country}</p>
//       <p>City: {city}</p>
//       <p className='One'>Description: {description}</p>
//       <p className='Two'>Humidity: {humidity}%</p>
//       <p className='Three'>Wind Speed: {windSpeed} m/s</p>
//       <p className='Four'>weather conditions:</p>
//       <img src={iconUrl} alt="Weather Icon" className='img1' />
//       <p className='Five'>
//         Temperature: {isCelsius ? `${temperatureC.toFixed(0)} °C` : `${temperatureF.toFixed(0)} °F`}
//       </p>
//       <button onClick={toggleTemperature} className='Cambio'>
//       change to ({isCelsius ? 'Fahrenheit' : 'Celsius'})
//       </button>
      
//     </div>
//   );
// };

// export default WeatherApp;
