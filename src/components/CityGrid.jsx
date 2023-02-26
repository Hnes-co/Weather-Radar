import { handlePrecipitation } from "../services/precipitation";
import ForecastItem from "./ForecastItem";

function CityGrid({ weatherData }) {
  if(weatherData.length > 0) {
    return (
      <div className="city-item-grid">
        {weatherData.map((data, index) =>
          <div key={index} className="city-item">
            <div className="city-item-main">
              <div className="city-item-main-top">
                <div className="item-title">
                  <div className="item-title-left">
                    <label className="item-title-city">{data.current.name}</label>
                    <label className="item-description">{data.current.weather[0].description}</label>
                  </div>
                  <div className="item-title-right">
                    <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} alt="icon.png"></img>
                    <label className="item-title-temp"> {Math.round(data.current.main.temp)} °C</label>
                  </div>
                </div>
              </div>
              <div className="city-item-main-bottom">
                <div className="item-date">
                  <label className="item-date-day">{new Date(data.current.dt * 1000).toLocaleDateString([], { month: 'long', day: 'numeric' })}</label>
                  <label className="item-date-time">{new Date(data.current.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</label>
                </div>
                <div className="item-details">
                  <label className="item-details-wind">Wind: {Math.round(data.current.wind.speed * 10) / 10} m/s</label>
                  <label className="item-details-humidity">Humidity: {data.current.main.humidity} %</label>
                  <label className="item-details-precipitation">{handlePrecipitation('current', data.current)}</label>
                </div>
              </div>
            </div>
            <div className="city-item-hourly-list">
              {data.forecast.list.map((data, index) => (
                <ForecastItem key={index} data={data} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  return null;
};

export default CityGrid;