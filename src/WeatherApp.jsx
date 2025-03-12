import Searchbox from "./Searchbox"
import InfoBox from "./InfoBox"
import { useState } from "react";
import "./WeatherApp.css"

export default function WeatherApp() {


  const [weatherInfo , setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.21,
    humidity: 23,
    temp: 25.05,
    tempMax: 25.05,
    tempMin: 25.05,
    weather: "clear sky"

  });

  let updateInfo = (result)=> {
  setWeatherInfo(result);
  }

 return (
    <div className="WeatherApp">
    <Searchbox updateInfo = {updateInfo} />
    <InfoBox info = {weatherInfo} />
    </div>
  );
}