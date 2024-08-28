import { useState } from "react";
import WeatherStatus from "./WeatherStatus";
import { countryList } from "../db/Countries";

const WeatherContainer = ({ weather }) => {
  console.log(weather);

  const [isCelsius, setIsCelsius] = useState(true);

  const changeUnitTemp = (temp) => {
    if (isCelsius) {
      const celsiusTemp = (temp - 273.15).toFixed(1);
      return celsiusTemp + " °C";
    } else {
      const fahrenheitTemp = ((temp - 273.15) * (9 / 5) + 32).toFixed(1);
      return fahrenheitTemp + " °F";
    }
  };

  const weatherIcons = {}

  const handleChangeUnit = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <section className="text-center gap-5 grid">
      {/*Lugar*/}
      <h3 className="text-xl font-semibold">
        {weather.name}, {countryList[`${weather.sys.country}`]}
      </h3>
      <div className="gap-5 grid sm:grid-cols-[1fr_auto] ">
        {/*Seccion Superior*/}
        <article className="bg-slate-500/50 rounded-2xl grid grid-cols-2 items-center p-3">
          <h4 className="col-span-2 text-lg capitalize">
            {weather.weather[0].description}
          </h4>
          <span className="text-5xl">{changeUnitTemp(weather.main.temp)}</span>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </article>
        {/*Seccion Inferior*/}
        <article className="grid grid-cols-3 justify-items-center bg-slate-500/50 rounded-2xl p-2 py-3 sm:grid-cols-1">
          <WeatherStatus
            icon="/wind.svg"
            unit="m/s"
            value={weather.wind.speed}
          />
          <WeatherStatus
            icon="/humidity.svg"
            unit="%"
            value={weather.main.humidity}
          />
          <WeatherStatus
            icon="/pressure.svg"
            unit="hPa"
            value={weather.main.pressure}
          />
            <WeatherStatus
            icon="/humidity.svg"
            unit="mm"
            //Optional chaining (?.)
            value={weather.rain?.["1h"]}
          />
        </article>
      </div>
      {/*Boton*/}
      <div className="grid justify-items-center">
        <button
          onClick={handleChangeUnit}
          className="text-center rounded-2xl p-2 bg-blue-600/50 w-40"
        >
          C°/F°
        </button>
      </div>
    </section>
  );
};
export default WeatherContainer;
