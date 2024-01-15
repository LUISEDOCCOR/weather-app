import React, { useEffect, useState } from "react";
import { getWeatherData } from "../API/api";

const CurrentWeather =  ({data}) => {
    
    const [Weather, setWeater] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            if(data.length > 0){
                const lat = data[0].lat
                const lon = data[0].lon
                setLoading(true)
                setWeater(await getWeatherData(lat, lon))
                setLoading(false)
            } 
        }
        fetchData()
    },[data])


    if(data.length > 0 && !isLoading ){
        return (
            <article className="flex flex-col items-center gap-16 md:gap-32 md:w-9/12 md:px-0 px-12">
                <div className="md:flex md:items-center md:gap-32 md:flex-row ">
                    <div className="md:space-y-4 md:text-start space-y-8 text-center">
                        <h2 className="text-6xl font-semibold">{data[0].name}</h2>
                        <h3 className="text-5xl font-semibold">{Weather.main.temp}°</h3>
                    </div>
                    <img className="md:block hidden h-60 hover:scale-110 transition-transform" src={`http://openweathermap.org/img/w/${Weather.weather[0].icon}.png`} alt="icon-img" />
                </div>
                <div className="flex text-4xl justify-center gap-6 md:gap-12 md:flex-row flex-col">
                    <h4>Min: {Weather.main.temp_min}°</h4>
                    <h4>Max: {Weather.main.temp_max}°</h4>
                    <h4>Humidity: {Weather.main.humidity}%</h4>
                </div>
            </article>
        )
    }else if (data.length <= 0) {
        return(
            <div className="md:space-y-4 md:px-0 px-8 space-y-6">
                <h2 className="text-5xl text-center font-semibold">Welcome, enter a city to start.</h2>
                <h3 className="text-3xl text-center">Created with 💖 by Luis Eduardo</h3>
            </div>
        )
    }else{
        return(
            <div>
                <div class="relative inline-flex">
                    <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div class="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                    <div class="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
                </div>
            </div>
        )
    }
}
    



export default CurrentWeather