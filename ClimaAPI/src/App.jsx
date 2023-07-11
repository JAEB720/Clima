import React, { useState, useEffect } from 'react';
import WeatherApp from './componets/WeatherApp';
import Loader from './componets/Loader';

import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      <h1>Weather</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <WeatherApp />
    
      )}
      <p className='Author'>🦊 Hecho por <a href="https://github.com/JAEB720" target='_blank'>JAEB720</a></p> 
    </div>
  );
};

export default App;
