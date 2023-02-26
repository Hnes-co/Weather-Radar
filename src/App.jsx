
import './App.css';
import CityGrid from './components/CityGrid';
import { getWeatherData } from './services/api';
import { useState } from 'react';
import Select from 'react-select';

function App() {

  const [weatherData, setWeatherData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const options = [
    {
      id: 0,
      label: 'Kaikki kaupungit',
      value: 'kaikki kaupungit'
    },
    {
      id: 1,
      label: 'Tampere',
      value: 'tampere',
      lat: 61.4991,
      lon: 23.7871
    },
    {
      id: 2,
      label: 'Jyväskylä',
      value: 'jyväskylä',
      lat: 62.2415,
      lon: 25.7209
    },
    {
      id: 3,
      label: 'Kuopio',
      value: 'kuopio',
      lat: 62.8924,
      lon: 27.677
    },
    {
      id: 4,
      label: 'Espoo',
      value: 'espoo',
      lat: 60.25,
      lon: 24.6667
    }
  ];

  async function handleWeatherData(value) {
    setWeatherData([]);
    setErrorMessage("");
    if(value.id === 0) {
      for(let i = 1; i < options.length; i++) {
        const response = await getWeatherData(options[i]);
        if(!response.error) {
          setWeatherData(prevState => prevState.concat([response]));
        }
        else {
          setErrorMessage(response.error);
        }
      }
    }
    else {
      const response = await getWeatherData(value);
      if(!response.error) {
        setWeatherData(prevState => prevState.concat([response]));
      }
      else {
        setErrorMessage(response.error);
      }
    }
  }

  return (
    <div className="App">
      <div className="header">
        <label>Säätutka</label>
      </div>
      <div className="main-container">
        <Select
          className="dropdown"
          options={options}
          defaultValue={{ value: "valitse kaupunki", label: "Valitse kaupunki" }}
          onChange={(value) => handleWeatherData(value)}
        />
        <label className="errormessage">{errorMessage}</label>
        <CityGrid weatherData={weatherData} />
      </div>
    </div>
  );
};

export default App;