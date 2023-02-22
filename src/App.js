import React, { useEffect, useState } from 'react';
import Header from "./components/Header";
import "./App.css";
import WeatherCard from "./components/WeatherCard"
import axios from 'axios';

const URL = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = `ffbddb778df8adb6ac415b47d213ed91`

function App() {
  const [latitude, setLatitude] = useState(17.41);
  const [longitude, setLongitude] = useState(78.26);
  const [city, setCity] = useState('Hyderabad');
  const [temprature, setTemprature] = useState('');
  const [humidity, setHumidity] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);

  useEffect(() => {
  navigator.geolocation.getCurrentPosition(function(position){
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    });

    axios.get(`${URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    .then((weatherData)=>{
      console.log(weatherData.data);
      setTemprature(weatherData.data.main.temp)
      setSunset(weatherData.data.sys.sunset)
      setSunrise(weatherData.data.sys.sunrise)
      setHumidity(weatherData.data.main.humidity)
      setCity(weatherData.data.name)
    })
  }, [latitude, longitude])
  
  return (
    <div className="main">
     <Header /> 
     <WeatherCard 
     temprature={temprature}
     humidity={humidity}
     sunrise={sunrise}
     sunset={sunset}
     city={city}
     />
    </div>
  )
}
export default App;