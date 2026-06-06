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
    <div className="flex w-full bg-slate-900">
      <div className="flex flex-1 items-center bg-slate-800 px-4 gap-3">
        <span className="text-slate-400 text-lg">🔍</span>
        <input
          className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm py-4 outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for a city..."
        />
      </div>

      <button
        className="bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold px-6 transition-colors duration-150"
        onClick={handleSearch}
      >
        Search
      </button>

      {hasData && (
        <button
          className="bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium px-5 transition-colors duration-150 border-l border-slate-600"
          onClick={handleClear}
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default WeatherSearch;