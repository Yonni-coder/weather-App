export default function WeatherForm({ onChangeCity }) {
const handleSubmit = (e) => {
e.preventDefault()
const formData = new FormData(e.target)
const city = formData.get('inputCity')?.toString().trim()
if (!city) return
onChangeCity(city)
e.target.reset()
}


return (
<div className="max-w-4xl mx-auto p-4">
<form onSubmit={handleSubmit} className="bg-white/80 dark:bg-slate-900 backdrop-blur-md rounded-2xl shadow-lg p-4 flex gap-3 items-center">
<label htmlFor="inputCity" className="sr-only">Ville</label>


<div className="flex items-center gap-3 flex-1">
<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
</svg>


<input
id="inputCity"
name="inputCity"
type="text"
placeholder="Entrez une ville (ex: Antananarivo, Paris, Madrid...)"
className="w-full bg-transparent outline-none placeholder:text-slate-400 text-slate-900 dark:text-slate-100"
aria-label="Ville"
/>
</div>

<button
type="submit"
className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium px-4 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-sky-300 transition"
>
<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
</svg>
Voir la météo
</button>
</form>
</div>
)
}
