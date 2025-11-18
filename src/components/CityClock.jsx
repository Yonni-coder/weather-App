import React, { useEffect, useState } from "react";

export default function CityClock({ tz, epochMs }) {
  const [timeMs, setTimeMs] = useState(epochMs ?? Date.now());

  useEffect(() => {
    setTimeMs(epochMs ?? Date.now());
  }, [epochMs]);

  useEffect(() => {
    const id = setInterval(() => setTimeMs((t) => t + 1000), 1000);
    return () => clearInterval(id);
  }, []);

  const dt = new Date(timeMs);

  const timeZone = tz || (typeof Intl !== "undefined" && Intl.DateTimeFormat().resolvedOptions().timeZone) || "UTC";

  const timeStr = dt.toLocaleTimeString("fr-FR", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const dateStr = dt.toLocaleDateString("fr-FR", {
    timeZone,
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="text-right">
      <div className="text-sm font-medium text-slate-800 dark:text-slate-100" aria-label="Heure locale">
        {timeStr}
      </div>
      <div className="text-xs text-slate-500 dark:text-slate-400">
        {dateStr} · <span className="uppercase">{timeZone.replace("_", " ")}</span>
      </div>
    </div>
  );
}
