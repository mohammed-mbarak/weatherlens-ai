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


# 🛡️ CORS & Proxy Layer

## The Problem
When the application was deployed to Netlify, all API requests to
https://api.weather-ai.co were blocked by the browser with the following error:

  Access to XMLHttpRequest at 'https://api.weather-ai.co/v1/current'
  from origin 'https://weatherlensai.netlify.app' has been blocked
  by CORS policy: No 'Access-Control-Allow-Origin' header is present
  on the requested resource.

This is a standard browser security restriction. When a frontend
application running on one domain (weatherlensai.netlify.app) makes
a direct HTTP request to an API on a different domain (api.weather-ai.co),
the browser blocks the request unless the API explicitly allows it via
CORS headers. Since the Weather-AI API does not include the required
Access-Control-Allow-Origin header in its responses, every request
made directly from the browser was rejected.

## The Solution — Netlify Serverless Proxy
To bypass this restriction, a serverless proxy function was implemented
using Netlify Functions. Instead of the browser calling the Weather-AI
API directly, all requests are routed through a server-side function
that runs on Netlify's infrastructure.

## How it works:

  Browser → /api/current
      ↓
  Netlify Redirect (/api/* → /.netlify/functions/weather)
      ↓
  Netlify Function (server-side, no CORS restriction)
      ↓
  https://api.weather-ai.co/v1/current
      ↓
  Response returned to browser with CORS headers added

## Implementation

1. A Netlify Function was created at netlify/functions/weather.js
   This function acts as a middleware — it receives the request from
   the browser, forwards it to the Weather-AI API with the API key
   attached server-side, and returns the response back to the browser
   with the correct CORS headers.

2. A redirect rule was added in netlify.toml to route all /api/*
   requests to the function:

   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/weather/:splat"
     status = 200

3. The Axios base URL was updated to switch automatically between
   environments:

   - Development: calls https://api.weather-ai.co/v1 directly
     (no CORS issue locally since the browser restriction only
     applies in production deployments)

   - Production: calls /api which routes through the Netlify proxy

   const api = axios.create({
     baseURL: import.meta.env.PROD
       ? "/api"
       : import.meta.env.VITE_API_BASE_URL,
   });

## Security Benefit
Because the API key is injected inside the Netlify Function using
an environment variable (process.env.VITE_WEATHER_AI_API_KEY),
it is never exposed in the browser or in the client-side JavaScript
bundle. This keeps the key secure in production.

## Geocoding Note
The Weather-AI API requires lat/lon coordinates for all endpoints
and provides no city-name search endpoint. This app uses the
Open-Meteo free geocoding API (geocoding-api.open-meteo.com) to
resolve city names to coordinates, which are then passed to the
Weather-AI endpoints. This is standard practice for coordinate-based
weather APIs.


# ⚙️ Setup Instructions
- 1. Clone the repository

  git clone https://github.com/mohammed-mbarak/weatherlens-ai
  cd weather-ai-dashboard

- 2. Install dependencies

  npm install

- 3. Create environment variables
Create a .env file:

  VITE_API_BASE_URL=https://api.weather-ai.co/v1
  VITE_WEATHER_AI_API_KEY=your_api_key_here

- 4. Start development server

  npm run dev

- 5. For production deployment on Netlify
  - Push to GitHub
  - Connect repository on Netlify
  - Add environment variable VITE_WEATHER_AI_API_KEY in Netlify dashboard
  - Netlify will auto-detect netlify.toml and deploy the proxy function


# 🏗 Project Structure

src/
│
├── components/
│   ├── weather/
│   ├── home/
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
│
netlify/
│
└── functions/
    ├── weather.js
    └── package.json


## 🔄 Key Architecture Design
- Coordinates are dynamically updated via city search
- Weather data is fully reactive based on selected location
- Zustand handles global state (current, forecast, usage, insights, coords)
- Geo lookup decouples city names from weather API
- Proxy layer handles CORS and keeps API key server-side
- Loading states ensure smooth UX transitions

## Assessment Objective

This project was developed for the Weather-AI Integration Challenge and demonstrates:

- API consumption
- State management
- Production deployment
- Error handling
- Secure API integration
- Frontend architecture


## Future Improvements

- Weather alerts and notifications
- Historical weather trends
- Interactive weather maps
- Offline caching
- AI insights support for Pro accounts