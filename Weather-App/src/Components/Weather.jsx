import React, { useEffect, useState } from "react"

const Weather = () => {
  const [city, setCity] = useState(null)
  const [search, setSearch] = useState("London")

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&APPID=bdc1f7bd9a62f46595bdc12d0637566a`
    const fetchApi = async () => {
      const res = await fetch(url)
      const jsondata = await res.json()
      setCity(jsondata)
    }
    fetchApi()
  }, [search])

  return (
    <>
      <div className="container">
        {city ? (
          <div>
            <div className="top-bar">
              <input
                type="text"
                className="cityInput"
                placeholder="Search the City"
                onChange={(e) => {
                  setSearch(e.target.value)
                }}
              />
            </div>
            {city.weather && city.weather[0] && city.weather[0].icon && (
              <div className="weather-image">
                {
                  <img
                    src={`https://openweathermap.org/img/w/${city.weather[0].icon}.png`}
                    style={{ width: "220px", height: "200px" }}
                  />
                }
              </div>
            )}
            <div className="weather-description">
              {city.weather &&
                city.weather[0] &&
                city.weather[0].description && (
                  <p>{city.weather[0].description}</p>
                )}
            </div>

            <div className="weather-temp">{city.main && city.main.temp} °C</div>
            <div className="weather-location">{search.toUpperCase()}</div>
            <div className="data-container">
              <div className="element">
                <img src="" alt="" className="icon" />
                <div className="data">
                  <div className="humidity-percent">
                    {city.main && city.main.humidity}%
                  </div>
                  <div className="text">Humidity</div>
                </div>
              </div>
              <div className="element">
                <img src="" alt="" className="icon" />
                <div className="data">
                  <div className="wind-rate">
                    {city.wind && city.wind.speed} Km/h
                  </div>
                  <div className="text">Wind Speed</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading Weather Data</p>
        )}
      </div>
    </>
  )
}

export default Weather
