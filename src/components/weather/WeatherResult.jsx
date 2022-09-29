import React, { useContext } from 'react'
import WeatherContext from '../../context/weather/WeatherContext'

function WeatherResult() {
  const {weatherdata} = useContext(WeatherContext)
  
  return (
    <>
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cold-2 d-flex justify-center mt-12 gap-8'>
      <div className='info'>
        <div className='location'>
          <p>{weatherdata && weatherdata.name}</p>
        </div>
        <div className='temp'>
          <p>{(weatherdata?.main?.temp - 273.15).toFixed(1)}°C</p>
        </div>
      </div>
      
      <div className='description'>
        <p>{weatherdata?.weather[0]?.description}</p>
      </div>
    </div>

    <div className='bottom grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cold-2 transition ease-out hover:scale-125'>
      <div className='feels'>
        <p>{(weatherdata?.main?.feels_like - 273.15).toFixed(1)}°C</p>
        <p>Feels Like</p>
      </div>
      <div className='humidity'>
        <p>{weatherdata?.main?.humidity}%</p>
        <p>Humidity</p>
      </div>
      <div className='wind'>
        <p>{weatherdata?.wind?.speed} MPH</p>
        <p>Wind Speed</p>
      </div>
    </div>
  </>
  )
}

export default WeatherResult