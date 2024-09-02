import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherContainer from "./components/WeatherContainer";
import { weatherBackground } from "./db/weatherBackground";

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const [weather, setWeather] = useState(null);

  const success = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //const API_KEY = "3f9093b9c3326ca304c5c2b1aded4520"; 
    

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
  };

  return (
    <main>
      {weather === null ? (
        <section className='font-["Lato"] flex justify-center items-center min-h-screen bg-black text-white px-2'>
          <div>
            <img src="vector.svg" alt="" />
          </div>
          <h3 className="text-center p-5">WeatherApp</h3>
        </section>
      ) : (
        <div
          className='font-["Lato"] flex justify-center items-center min-h-screen bg-cover bg-center  text-white px-2]'
          style={{
            backgroundImage: `url(${
              weatherBackground[`${weather.weather[0].description}`]
            })`,
          }}
        >
          <WeatherContainer weather={weather} />
        </div>
      )}
    </main>
  );
}

export default App;
