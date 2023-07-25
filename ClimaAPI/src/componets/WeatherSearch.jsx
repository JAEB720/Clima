// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const WeatherSearch = () => {
//   const [ciudad, setCiudad] = useState('');
//   const [pais, setPais] = useState('');
//   const [clima, setClima] = useState(null);
//   const [sugerenciasCiudad, setSugerenciasCiudad] = useState([]);
//   const [sugerenciasPais, setSugerenciasPais] = useState([]);

//   useEffect(() => {
//     const buscarSugerencias = async () => {
//       try {
//         const apiKey = '578b66de168bd6acfc917ef82ebbba46';

//         const urlCiudad = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=5&appid=${apiKey}`;
//         const urlPais = `https://restcountries.com/v3.1/name/${pais}`;

//         const [responseCiudad, responsePais] = await Promise.all([
//           axios.get(urlCiudad),
//           axios.get(urlPais),
//         ]);

//         const ciudades = responseCiudad.data.map((ciudad) => ciudad.name);
//         const paises = responsePais.data.map((pais) => pais.name.common);

//         setSugerenciasCiudad(ciudades);
//         setSugerenciasPais(paises);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     if (ciudad !== '') {
//       buscarSugerencias();
//     } else {
//       setSugerenciasCiudad([]);
//     }
//   }, [ciudad, pais]);

//   const buscarClima = async () => {
//     try {
//       const apiKey = '578b66de168bd6acfc917ef82ebbba46';

//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;

//       const response = await axios.get(url);
//       const weatherData = response.data;

//       setClima(weatherData);
//     } catch (error) {
//       console.error(error);
//       // Manejo de error
//     }
//   };

//   return (
//     <div  className="app">
//       <input 
//         type="text"
//         placeholder="Ciudad"
//         value={ciudad}
//         onChange={(e) => setCiudad(e.target.value)}
        
//       />
//       {sugerenciasCiudad.length > 0 && (
//         <ul>
//           {sugerenciasCiudad.map((sugerencia) => (
//             <li key={sugerencia}>{sugerencia}</li>
//           ))}
//         </ul>
//       )}

//       <input
//         type="text"
//         placeholder="País"
//         value={pais}
//         onChange={(e) => setPais(e.target.value)}
//       />
//       {sugerenciasPais.length > 0 && (
//         <ul>
//           {sugerenciasPais.map((sugerencia) => (
//             <li key={sugerencia}>{sugerencia}</li>
//           ))}
//         </ul>
//       )}

//       <button onClick={buscarClima} >Buscar Clima</button>

//       {clima && (
//         <div>
    
//       </div>
//       )}
//     </div>
//   );
// };

// export default WeatherSearch;
