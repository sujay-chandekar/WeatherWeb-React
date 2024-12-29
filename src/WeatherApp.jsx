import SearchBox from './SearchBox'
import BoxCard from "./BoxCard"
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,SetWeatherInfo] = useState({
        city:"Delhi",
        temp : 16.5,
        minTemp : 16.5,
        maxTemp : 16.5,
        humidity : 67,
        feels_like : 15.46,
        weather : "broken clouds",            
    });
    let updateInfo = (result)=>{
        SetWeatherInfo(result);
    }
    return(
        <div>
            <h1><i>Created by Sujay</i></h1>
            <SearchBox updateInfo={updateInfo}/>
            <BoxCard info={weatherInfo}/>
        </div>
    );
}