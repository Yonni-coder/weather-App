const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL
import { useEffect, useState } from "react"
import WeatherForm from "./WeatherForm"
import WeatherInfo from "./WeatherInfo"
import Loader from "./Loader"

export default function WeatherApp() {
    const [weather, setWeather] = useState(null)
    useEffect(()=>{
        loadInfo()
    }, [] )

    const loadInfo = async (city = 'Paris')=>{
        try {
            const request = await fetch(`${ WEATHER_API_URL}&key=${WEATHER_API_KEY}&q=${city}`)
            const json = await request.json()
            console.log(json)
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
