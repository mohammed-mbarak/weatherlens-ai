# 🌦️ Weather-AI Dashboard
A modern weather intelligence dashboard built with React + Vite, integrating the Weather-AI API to deliver real-time weather data, forecasts, and AI-powered insights based on user-selected locations.

# 🚀 Live Demo
👉 https://weatherlensai.netlify.app


## 📌 Features
- 🔍 City-based weather search (geo resolution API)
- 🌤 Real-time current weather display
- 📊 7-day weather forecast
- ⏱ Hourly weather breakdown
- 💧 Wind, humidity, and condition metrics
- 📡 Usage tracking dashboard
- ⚡ Fast API integration with Axios
- 🧩 Modular component architecture 
- 🔄 Dynamic location switching (no hardcoded city)

## 🧠 AI Weather Insights Endpoint (/v1/insights)
The Weather-AI API provides an advanced endpoint:

GET /v1/insights

## 🔒 Why it returns 403 Forbidden
This endpoint is a Pro/Scale-only feature. If you are using a Free plan API key, requests to this endpoint will fail with:

  403 Forbidden

## 📊 Reason
- The /v1/insights endpoint is part of the AI-powered weather features
- It is not included in the Free tier
- Access is restricted based on subscription level

## 🧠 Tech Stack
- React (Vite)
- Zustand (state management)
- Axios (API requests)
- TailwindCSS (UI styling)
- Weather-AI REST API

## 📡 API Integration
This project integrates the Weather-AI API:

Base URL:
https://api.weather-ai.co/v1


## Endpoints used:
- GET /current → Current weather
- GET /forecast → 7-day forecast
- GET /weather-geo → City → coordinates lookup
- GET /insights → AI weather insights (Pro)
- GET /usage → API usage tracking 


# ⚙️ Setup Instructions
- 1. Clone the repository

  git clone https://github.com/mohammed-mbarak/weatherlens-ai
  cd weather-ai-dashboard

- 2. Install dependencies

  npm install

- 3. Create environment variables
Create a .env file:

  VITE_API_BASE_URL=https://api.weather-ai.co/v1
  VITE_API_KEY=your_api_key_here

- 4. Start development server 

  npm run dev


# 🏗 Project Structure

src/
│
├── components/
│   ├── weather/
│   ├── usage/
│   ├── insights/
│   └── common/
│
├── pages/
│   ├── HomePage.jsx
│   ├── ForecastPage.jsx
│   ├── InsightsPage.jsx
│   └── UsagePage.jsx
│
├── hooks/
│   ├── useCurrentWeather.js
│   ├── useForecast.js
│   ├── useInsights.js
│   └── useUsage.js
│
├── services/
│   ├── axios.js
│   ├── weatherService.js
│   └── geoService.js
│
├── store/
│   └── weatherStore.js


## 🔄 Key Architecture Design
- Coordinates are dynamically updated via city search
- Weather data is fully reactive based on selected location
- Zustand handles global state (current, forecast, usage, insights)
- Geo lookup decouples city names from weather API
- Loading states ensure smooth UX transitions





