import React from 'react'
import WeatherResult from '../components/weather/WeatherResult'
import WeatherSearch from '../components/weather/WeatherSearch'


function Home() {
  return (
    <div>
        <WeatherSearch />
        <WeatherResult />
    </div>
  )
}

export default Home