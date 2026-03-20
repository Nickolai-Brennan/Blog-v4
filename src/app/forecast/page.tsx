'use client';

import { useState } from 'react';
import { mockWeather } from '@/lib/mock-data';
import SectionHeader from '@/components/ui/SectionHeader';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Wind, Droplets, Thermometer, MapPin, Star } from 'lucide-react';

const locations = ['Pebble Beach', 'Augusta', 'St Andrews'];

const SIMPLIFIED_WIND_FACTOR = 0.1;

type ForecastDay = { day: string; high: number; low: number; conditions: string; wind: number };
type WeatherItem = typeof mockWeather[0];

function getPlayingRating(weather: WeatherItem): { rating: number; label: string; color: string } {
  const score = (
    (weather.windSpeed < 10 ? 3 : weather.windSpeed < 20 ? 2 : 1) +
    (weather.conditions.includes('Sunny') ? 3 : weather.conditions.includes('Partly') ? 2 : 1) +
    (weather.temperature > 60 && weather.temperature < 85 ? 3 : weather.temperature > 50 ? 2 : 1)
  );
  if (score >= 8) return { rating: 5, label: 'Perfect Day', color: 'text-green-600' };
  if (score >= 6) return { rating: 4, label: 'Great Day', color: 'text-green-500' };
  if (score >= 4) return { rating: 3, label: 'Good Day', color: 'text-amber-500' };
  return { rating: 2, label: 'Challenging', color: 'text-red-500' };
}

export default function ForecastPage() {
  const [selectedLocation, setSelectedLocation] = useState('Pebble Beach');
  const weather = mockWeather.find(w => w.location === selectedLocation) ?? mockWeather[0];
  const forecast = JSON.parse(weather.forecast) as ForecastDay[];
  const playingRating = getPlayingRating(weather);

  const conditionIcon = (conditions: string) => {
    if (conditions.includes('Sunny')) return '☀️';
    if (conditions.includes('Partly')) return '⛅';
    if (conditions.includes('Rain') || conditions.includes('Shower')) return '🌧️';
    if (conditions.includes('Thunder')) return '⛈️';
    if (conditions.includes('Wind')) return '💨';
    return '🌤️';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader
        title="Fore!cast"
        subtitle="Weather conditions and playing forecasts for premier golf destinations"
      />

      {/* Location Selector */}
      <div className="flex flex-wrap gap-3 mb-8">
        {locations.map(loc => (
          <button
            key={loc}
            onClick={() => setSelectedLocation(loc)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
              selectedLocation === loc
                ? 'bg-green-800 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-green-50 hover:border-green-300'
            }`}
          >
            <MapPin size={14} />
            {loc}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Conditions */}
        <div className="lg:col-span-2">
          <Card shadow="lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 text-lg">{weather.location}</h3>
                <span className="text-xs text-gray-400">Updated just now</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6 mb-6">
                <div className="text-7xl">
                  {conditionIcon(weather.conditions)}
                </div>
                <div>
                  <div className="text-6xl font-thin text-gray-900">{weather.temperature}°F</div>
                  <div className="text-gray-600 text-lg">{weather.conditions}</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Wind, label: 'Wind', value: `${weather.windSpeed} mph ${weather.windDir}` },
                  { icon: Droplets, label: 'Humidity', value: `${weather.humidity}%` },
                  { icon: Thermometer, label: 'Feels Like', value: `${Math.round(weather.temperature - weather.windSpeed * SIMPLIFIED_WIND_FACTOR)}°F` },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-gray-50 rounded-lg p-3 text-center">
                    <Icon size={20} className="mx-auto text-green-600 mb-1" />
                    <div className="text-xs text-gray-500">{label}</div>
                    <div className="font-semibold text-gray-900 text-sm">{value}</div>
                  </div>
                ))}
              </div>

              {/* 5-Day Forecast */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wider">5-Day Forecast</h4>
                <div className="space-y-2">
                  {forecast.map(day => (
                    <div key={day.day} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-sm font-medium text-gray-700 w-24">{day.day}</span>
                      <span className="text-lg">{conditionIcon(day.conditions)}</span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Wind size={12} />{day.wind}mph
                      </span>
                      <div className="text-sm">
                        <span className="font-semibold text-gray-900">{day.high}°</span>
                        <span className="text-gray-400 ml-1">{day.low}°</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Playing Conditions Panel */}
        <div className="space-y-6">
          <Card shadow="md">
            <CardHeader>
              <h3 className="font-bold text-gray-900">Playing Conditions</h3>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <div className={`text-5xl font-bold ${playingRating.color} mb-2`}>
                  {playingRating.rating}/5
                </div>
                <div className={`text-lg font-semibold ${playingRating.color}`}>{playingRating.label}</div>
                <div className="flex justify-center gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < playingRating.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>Wind: {weather.windSpeed < 10 ? '✅ Calm — ideal for scoring' : weather.windSpeed < 20 ? '⚠️ Moderate — club selection key' : '❌ Strong — expect higher scores'}</p>
                <p>Temp: {weather.temperature > 65 ? '✅ Comfortable playing temperature' : '⚠️ Cool — dress in layers'}</p>
                <p>Conditions: {weather.conditions.includes('Sunny') || weather.conditions.includes('Partly') ? '✅ Dry ground — great roll' : '⚠️ Soft ground — expect less roll'}</p>
              </div>
            </CardContent>
          </Card>

          <Card shadow="md" className="bg-green-900 text-white">
            <CardContent className="pt-6">
              <h4 className="font-bold text-amber-300 mb-3">Course Recommendations</h4>
              <p className="text-green-200 text-sm mb-4">
                Based on today&apos;s conditions at {weather.location}:
              </p>
              <ul className="text-green-100 text-sm space-y-2">
                {playingRating.rating >= 4 ? (
                  <>
                    <li>🏌️ Great day for a full 18 holes</li>
                    <li>⛳ Take on those challenging pin positions</li>
                    <li>🎯 Practice your driver on the range first</li>
                  </>
                ) : playingRating.rating === 3 ? (
                  <>
                    <li>🏌️ Consider playing in the afternoon</li>
                    <li>⛳ Club up into the wind</li>
                    <li>🎯 Good day for working on your short game</li>
                  </>
                ) : (
                  <>
                    <li>🏌️ Consider the simulator today</li>
                    <li>⛳ If you play, dress warmly</li>
                    <li>🎯 Great day for the putting green</li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
