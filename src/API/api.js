const apiKey  = import.meta.env.VITE_API_KEY;


const addToLocalStorage = (city) => {
    localStorage.setItem('city', city)
}

export const getLocation= async (city) => {
    addToLocalStorage(city)
    const data = await fetch (`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
    const Location = await data.json()
    return Location
}


export const getWeatherData = async (lat, lon) => {
    const data = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
    const weatherData = await data.json()
    return weatherData
}