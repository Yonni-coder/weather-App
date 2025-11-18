import CityClock from './CityClock.jsx'

export default function WeatherInfo({ weather, zoom = 10 }) {
  const lat = weather?.location?.lat
  const lon = weather?.location?.lon

  const mapSrc =
    lat && lon
      ? `https://maps.google.com/maps?q=${encodeURIComponent(lat)},${encodeURIComponent(lon)}&z=${encodeURIComponent(
          zoom
        )}&output=embed`
      : null

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 md:flex md:items-center md:justify-between gap-6">
          {/* En-tête météo */}
          <div className="flex items-center gap-4">
            <img
              src={`https:${weather?.current?.condition?.icon}`}
              alt={weather?.current?.condition?.text || 'icone météo'}
              className="w-20 h-20 object-contain"
            />

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {weather?.location?.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {weather?.location?.country}
              </p>

              <CityClock
              tz={weather?.location?.tz_id}
              epochMs={weather?.location?.localtime_epoch ? weather.location.localtime_epoch * 1000 : undefined}
              />

              <div className="mt-2 flex items-baseline gap-3">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">
                  {weather?.current?.temp_c}°C
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {weather?.current?.condition?.text}
                </span>
              </div>
            </div>
          </div>

          {/* Petites stats */}
          <div className="mt-4 md:mt-0 flex gap-6">
            <div className="text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">Humidité</p>
              <p className="font-medium text-slate-800 dark:text-slate-100">{weather?.current?.humidity}%</p>
            </div>

            <div className="text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">Vent</p>
              <p className="font-medium text-slate-800 dark:text-slate-100">{weather?.current?.wind_kph} km/h</p>
            </div>

            <div className="text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">Ressenti</p>
              <p className="font-medium text-slate-800 dark:text-slate-100">{weather?.current?.feelslike_c}°C</p>
            </div>
          </div>
        </div>

        {/* Carte */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
          {mapSrc ? (
            <div className="aspect-video rounded-md overflow-hidden shadow-sm">
              <iframe
                title={`Carte ${weather?.location?.name}`}
                src={mapSrc}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : (
            <p className="text-sm text-slate-500">Coordonnées introuvables — impossible d'afficher la carte.</p>
          )}

          <div className="mt-3 flex justify-end">
            {lat && lon && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${lat},${lon}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-sky-600 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-sky-700 transition"
              >
                Ouvrir dans Google Maps
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
