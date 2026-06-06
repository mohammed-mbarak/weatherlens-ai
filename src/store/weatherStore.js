import { create } from "zustand";

const useWeatherStore = create((set) => ({
  location: null,
  current: null,
  forecast: [],
  insights: null,
  usage: null,
  coords: null,

  setLocation: (location) => set({ location }),
  setCurrent: (data) => set({ current: data }),
  setForecast: (data) => set({ forecast: data }),
  setInsights: (data) => set({ insights: data }),
  setUsage: (data) => set({ usage: data }),
  setCoords: (coords) => set({ coords }),
}));

export default useWeatherStore;