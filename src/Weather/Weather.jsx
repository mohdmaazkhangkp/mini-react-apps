import axios from 'axios';
import React, { useState } from 'react'
import './Weather.css'

const Weather = () => {
    const [searchQuery, setSearchQuery] = useState();
    const [data, setData] = useState();
    const fetchData = async()=>{
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=3fdd227dc06e490387a145e4a7f3983f`)
            setData(response.data)
        }
        catch(error){

        }

    }
  return (
    <div className="container">
        <div className="wrapper">
            <div className="search">
                <input type="text" value={searchQuery}/>
                <button onClick={fetchData}>Searh</button>
            </div>
            <div className="details">
                  <h2>{} °C</h2>
                  <h3>{}</h3>
                <div className="humidWind">
                      <h4>{} Humidity</h4>
                      <h4>{} Wind</h4>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Weather