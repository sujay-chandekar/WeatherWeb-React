import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    //handling submit
    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            setCity("");
            let data = await getWeatherInfo();
            updateInfo(data);
        } catch(err){
            setError(true);
        }
    }
    //getting data from the API
    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city : city.toUpperCase(),
                temp : jsonResponse.main.temp,
                minTemp : jsonResponse.main.temp_min,
                maxTemp : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feels_like : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,            
            }
            return result;
        } catch(err){
            throw err;
        }
    }
    //return the componet
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <h1>Search here !!</h1>
                <TextField id="outlined" label="City name" color="secondary" variant="outlined" onChange={handleChange} value={city} required/>
                <br/><br/>
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{color:"red"}}>No such place in our API</p>}
            </form>
        </div>
    );
}
