import Card from '@mui/material/Card';
 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
 
import Typography from '@mui/material/Typography';

import "./InfoBox.css";


export default function InfoBox ({info}){

const INIT_URL = "https://images.unsplash.com/photo-1558486012-817176f84c6d?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


let Cold_URL = "https://images.unsplash.com/photo-1612220343549-3d33b739e50d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww " ;
let Hot_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D " ;
let Rain_URL = "  https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww ";
 

  return (
    <div className="InfoBox">
      <h1 id='Heading'>Weatherly</h1>
      <Card className='info-card' sx={{ maxWidth: 345 }}>
      <CardMedia className='image-card'
        sx={{ height: 140 }}
        image={info.humidity>80? Rain_URL :
               info.temp>15? Hot_URL :
               Cold_URL }
        title="green iguana"
      />
      <CardContent className='card-content'>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component = "span">
          <p>Temperature = {info.temp}&deg;c</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;c</p>
          <p>Max Temp= {info.tempMax}&deg;c</p>
          <p>Feels Like = {info.feelsLike}</p>
          <p>Weather = <i> {info.weather} </i></p>
         
        </Typography>
      </CardContent>
     
    </Card>
    </div>
  )
}