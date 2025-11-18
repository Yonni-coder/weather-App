import { useEffect, useState } from "react"
import WeatherForm from "./WeatherForm"
import WeatherInfo from "./WeatherInfo"
import Loader from "./Loader"
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY
if (!WEATHER_API_KEY) {
    throw new Error('No API key provided. Please set VITE_WEATHER_API_KEY in your environment variables.')
}
const WEATHER_API_URL = 'https://api.weatherapi.com/v1/current.json?aqi=no'
export default function WeatherApp() {
    const [weather, setWeather] = useState(null)
    useEffect(()=>{
        loadInfo()
    }, [] )

    const loadInfo = async (city = 'Paris')=>{
        try {
            const request = await fetch(`${ WEATHER_API_URL}&key=${WEATHER_API_KEY}&q=${city}`)
            const json = await request.json()
            setTimeout(() => {
                setWeather(json)
            }, 2000)
        } catch (error) {
            console.error('Erreur de la récupération des données : ', error)
        }
    }
    const handleChange = (city)=>{
        setWeather(null)
        loadInfo(city)
    }
  return (
<div className="min-h-screen bg-linear-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 py-8">
<WeatherForm onChangeCity={handleChange} />
{weather ? <WeatherInfo weather={weather} /> : <Loader />}
</div>
)
}
