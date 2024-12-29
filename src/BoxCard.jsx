import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./BoxCard.css"

export default function BoxCard({info}) {
  const RAIN_URL = "https://images.unsplash.com/photo-1727958913281-1f5915611676?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";
  const HOT_URL = "https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww";
  const COLD_URL = "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyfGVufDB8fDB8fHww"; 
  let FinalUrl = info.humidity>80 ? RAIN_URL : info.temp>25 ?HOT_URL:COLD_URL;



    return (
      <div className='BoxCard'>
      <div className='cardInfo'>
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
        sx={{ height: 140 }}
        image={FinalUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80 ?  <ThunderstormIcon/>: info.temp>25 ?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Feels like: {info.feels_like}&deg;C</p>
          <p>Min temp: {info.minTemp}&deg;C</p>
          <p>Max temp: {info.maxTemp}&deg;C</p>
          <p>Max Humidity: {info.humidity}&deg;C</p>
          <p>The weather can be described as<i>{info.weather}</i> and feels like <i>{info.feels_like}&deg;C</i></p>
        </Typography>
      </CardContent>
      </Card>
      </div>
      </div>
    );
  }