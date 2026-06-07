import { useState } from "react";

function WeatherSearch({ onSearch, onClear, hasData }) {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    if (!value.trim()) return;
    onSearch(value.trim());
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleClear = () => {
    setValue("");
    onClear();
  };

  return (
    <div className="w-full bg-slate-900 px-3 py-3 sm:px-4 sm:py-4">
      <div className="flex items-center rounded-xl overflow-hidden">

        {/* Input area */}
        <div className="flex flex-1 items-center bg-slate-800 rounded-l-xl px-3 sm:px-4 gap-2 min-w-0">
          <span className="text-slate-400 text-base shrink-0">🔍</span>
          <input
            className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm py-3 sm:py-4 outline-none min-w-0"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for a city..."
          />
        </div>

        {/* Search button */}
        <button
          className="bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold px-4 sm:px-6 py-3 sm:py-4 shrink-0 transition-colors duration-150 rounded-r-xl"
          onClick={handleSearch}
        >
          <span className="hidden sm:inline">Search</span>
          <span className="sm:hidden">Go</span>
        </button>

        {/* Clear button */}
        {hasData && (
          <button
            className="bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium px-3 sm:px-5 py-3 sm:py-4 shrink-0 transition-colors duration-150 rounded-xl ml-2"
            onClick={handleClear}
          >
            <span className="hidden sm:inline">Clear</span>
            <span className="sm:hidden">✕</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default WeatherSearch;