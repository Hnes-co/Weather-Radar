import { handlePrecipitation } from "../services/precipitation";

function ForecastItem({ data }) {
  return (
    <div className="hourly-list-item" key={data.dt}>
      <div className="hourly-list-item-container">
        <div className="hourly-list-item-top">
          <label className="item-date-time">{new Date(data.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</label>
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icon.png"></img>
          <label className="time-table-temp">{Math.round(data.main.temp)} °C</label>
        </div>
        <div className="hourly-list-item-bottom">
          <label className="item-details-wind">{Math.round(data.wind.speed * 10) / 10} m/s</label>
          <label className="item-details-humidity">{data.main.humidity} %</label>
          <label className="item-details-precipitation">{handlePrecipitation('forecast', data)}</label>
        </div>
      </div>
    </div>
  );
}

export default ForecastItem;