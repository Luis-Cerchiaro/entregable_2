const WeatherContainer = ({weather}) => {
   console.log(weather)
    return (
        <section>
        {/*Lugar*/}
         <h3>{weather.name}, {weather.sys.country} </h3>
        <div>
          {/*Seccion Superior*/}
          <article>
            <h4>{weather[0].description}</h4>
            <span>24°C</span>
            <div>
              <img src="" alt="" />
            </div>
          </article>
          {/*Seccion Inferior*/}
          <article>Inferior</article>
        </div>
        {/*Boton*/}
        <button>C°/F°</button>
      </section>
  )
}
export default WeatherContainer