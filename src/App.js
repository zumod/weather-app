import React, { useState } from 'react';
import WeatherComponent  from './components/Weather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weatherData, setWeatherData] = useState({});

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await WeatherComponent(query);

            setWeatherData(data);
            setQuery('');
        }
    };

    return (
        <div className='main-container'>
            <input
                type='text'
                className='search'
                placeholder='Search...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
            {weatherData.main && (
                <div className='city'>
                    <h2 className='city-name'>
                        <span>{weatherData.name}</span>
                        <sup>{weatherData.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weatherData.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
