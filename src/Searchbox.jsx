import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css' ;
import { useState } from 'react';



export default function Searchbox ({updateInfo}){

  let[city, setCity] = useState("");
  let[error , setError] = useState(false)
  
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "0a4442dd9b044c1e9bb4bf0d1560ee2d";

let getWeatherInfo = async () => {
 try {
  let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
let jsonResponse = await response.json();
   console.log(jsonResponse);

   let result = {
    city: city,
    temp: jsonResponse.main.temp,
    tempMin: jsonResponse.main.temp_min,
    tempMax: jsonResponse.main.temp_max,
    humidity: jsonResponse.main.humidity,
    feelsLike: jsonResponse.main.feels_like,
    weather:  jsonResponse.weather[0].description,
   }
   console.log(result);
   return result;
 } catch (err) {
  throw error;
 }
};



  let handleChange = (event)=> {
   setCity(event.target.value);
  }
  
let handleSubmit = async (event)=> {
 try {
  event.preventDefault();
  console.log(city);
  setCity("");
 let newInfo = await getWeatherInfo();
 updateInfo(newInfo);
}  catch (err) {
  setError(True);
 }

  
 }  
  return (
    <div  className='SearchBox'> 

   <h3 id='subject'>Search Anywhere in the World</h3>
 

   
    <form onSubmit={handleSubmit}>
  <TextField id="city" label="Enter City" variant="outlined"  required value={city} onChange={handleChange}/>
  <br></br>    <br></br>
  <Button className='search-btn' variant="contained" type='submit'>Search</Button>
  {error && <p>No Such Place Exists</p>}
  
  </form>

   

    </div>
  )
}