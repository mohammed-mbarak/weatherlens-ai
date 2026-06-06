import api from "./axios";

export const getUsage = () => api.get("/usage");