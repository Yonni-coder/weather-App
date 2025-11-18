
export default function Loader() {
return (
<div className="p-6 max-w-4xl mx-auto">
<div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden animate-pulse">
<div className="p-6 md:flex md:items-center md:justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-20 h-20 rounded-md bg-slate-200 dark:bg-slate-700" />
<div className="flex-1">
<div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2" />
<div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/3" />
</div>
</div>


<div className="mt-4 md:mt-0 flex gap-6">
<div className="w-20 h-8 bg-slate-200 dark:bg-slate-700 rounded" />
<div className="w-20 h-8 bg-slate-200 dark:bg-slate-700 rounded" />
<div className="w-20 h-8 bg-slate-200 dark:bg-slate-700 rounded" />
</div>
</div>


<div className="p-4 border-t border-slate-100 dark:border-slate-800">
<div className="aspect-video rounded-md overflow-hidden bg-slate-200 dark:bg-slate-700" />
</div>
</div>
</div>
)
}
