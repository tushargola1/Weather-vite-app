import React, { useEffect, useState } from "react";
import "../styles/herosection.css";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";
import axios from "axios";

import clear_sky from "../assets/icons/01d.png";
import few_clouds from "../assets/icons/02d.png";
import scattered_clouds from "../assets/icons/03d.png";
import broken_clouds from "../assets/icons/04d.png";
import shower_rain from "../assets/icons/09d.png";
import rain from "../assets/icons/10d.png";
import thunderstorm from "../assets/icons/11d.png";
import snow from "../assets/icons/13d.png";
import mist from "../assets/icons/50d.png";


const url = "https://api.openweathermap.org/data/2.5/weather?";  //present time api url
const apiKey = "d01e3eddabd11902b2deedbff26539e7";

const Herosection = ({ city, cardcolor, boxShadow, faColor, celciusColor }) => {
  const [currentDay, setCurrentDay] = useState(
    new Date().toLocaleDateString(undefined, { weekday: "long" })
  );

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  const [temp, setTemp] = useState("--");
  const [feels_like, setFeels_like] = useState("--");

  const [icon, setIcon] = useState(clear_sky);
  const [weatherdesc, setWeatherdesc] = useState("--");
  const [humidity, setHumidity] = useState("--");
  const [wind, setWind] = useState("--");
  const [pressure, setPressure] = useState("--");
  const [visibility, setVisibility] = useState("--");

  const [sunrise_time, setSunrise_time] = useState("--");
  const [sunset_time, setSunset_time] = useState("--");





  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}q=${city}&appid=${apiKey}`, {
          signal,
        });

        
        // console.log(response.data);
        setTemp(Math.round(response.data.main.temp - 273));
        setFeels_like(Math.round(response.data.main.feels_like - 273));
        if (
          response.data.weather[0].icon === "01d" ||
          response.data.weather[0].icon === "01n"
        ) {
          setIcon(clear_sky);
        } else if (
          response.data.weather[0].icon === "02d" ||
          response.data.weather[0].icon === "02n"
        ) {
          setIcon(few_clouds);
        } else if (
          response.data.weather[0].icon === "03d" ||
          response.data.weather[0].icon === "03n"
        ) {
          setIcon(scattered_clouds);
        } else if (
          response.data.weather[0].icon === "04d" ||
          response.data.weather[0].icon === "04n"
        ) {
          setIcon(broken_clouds);
        } else if (
          response.data.weather[0].icon === "09d" ||
          response.data.weather[0].icon === "09n"
        ) {
          setIcon(shower_rain);
        } else if (
          response.data.weather[0].icon === "10d" ||
          response.data.weather[0].icon === "10n"
        ) {
          setIcon(rain);
        } else if (
          response.data.weather[0].icon === "11d" ||
          response.data.weather[0].icon === "11n"
        ) {
          setIcon(thunderstorm);
        } else if (
          response.data.weather[0].icon === "13d" ||
          response.data.weather[0].icon === "13n"
        ) {
          setIcon(snow);
        } else {
          setIcon(mist);
        }

        setWeatherdesc(response.data.weather[0].main);
        setHumidity(response.data.main.humidity);
        setWind(response.data.wind.speed);
        setPressure(response.data.main.pressure);
        setVisibility(response.data.visibility / 1000);

        let sunriseTimestamp = response.data.sys.sunrise * 1000;
        let sunsetTimestamp = response.data.sys.sunset * 1000;

        let rise = new Date(sunriseTimestamp);
        let set = new Date(sunsetTimestamp);

        const formattedSunrise = rise.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        const formattedSunset = set.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        setSunrise_time(formattedSunrise);
        setSunset_time(formattedSunset);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          console.error(error);
        }
      }
    };



    // 5 day forecast 


    


    fetchData();

    // Cleanup function to cancel the request when the component is unmounted or the city changes
    return () => {
      controller.abort();
    };
  }, [city]);

  const intervalId = setInterval(() => {
    setCurrentDay(
      new Date().toLocaleDateString(undefined, { weekday: "long" })
    );
    setCurrentTime(
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  }, 1000);

  return (
    <>
      <div className="row1">
        <div
          className="time-date"
          style={{ background: cardcolor, boxShadow: boxShadow }}
        >
          <h2 style={{ color: faColor }}>{city.toUpperCase()}</h2>
          <div className="val" style={{ color: faColor }}>
            <h1 className="time">{currentTime}</h1>
            <h5 className="date">{currentDay}</h5>
          </div>
        </div>

        <div className="weather-details" style={{ background: cardcolor }}>
          <div className="degree" style={{ color: celciusColor }}>
            <div className="ssss">
                     <h1>{`${temp}°C`}</h1>
            <h3>{`Feels like: ${feels_like}°C`}</h3>
            </div>
     

            {/* sunrise */}
            <div className="sunnn">

           
            <div className="sunrise">
              <img src={sunrise} alt="" />
              <div className="sun">
                <p>Sunrise</p>
                <h6>{`${sunrise_time}`}</h6>
              </div>
            </div>

            {/* sunset */}
            <div className="sunset">
              <img src={sunset} alt="" />
              <div className="sun">
                <p>Sunset</p>
                <h6>{`${sunset_time}`}</h6>
              </div>
            </div>
            </div>
          </div>

          {/* second icon section  */}
          <div className="icon" style={{ color: faColor }}>
            <img src={icon} alt="dd" />
            <p>{weatherdesc}</p>
          </div>

          {/* other forecast information */}
          <div className="infor" style={{ color: faColor }}>
            <div className="humidity gap">
              <i className="fa-solid fa-water size"></i>
              <p>{`${humidity} %`}</p>
              <p>Humidity</p>
            </div>

            <div className="wind gap">
              <i className="fa-solid fa-wind size"></i>

              <p>{`${wind} m/s`}</p>
              <p>Wind Speed</p>
            </div>

            <div className="pressure gap">
              <i className="fa-solid fa-gauge size"></i>

              <p>{`${pressure} hPa`}</p>
              <p>Pressure</p>
            </div>

            <div className="visibility gap">
              <i className="fa-solid fa-eye size"></i>

              <p>{`${visibility} km`}</p>
              <p>Visibility</p>
            </div>
          </div>
        </div>

        {/* second column  */}


{/* days forecast */}
        <div className="five-day-forecast"> 
      <div className="days-forecast">
  
      </div>
        </div>

        {/* hourly forecast */}
        <div className="hourly-forecast">  

        </div>
     
      </div>
    </>
  );
};

export default Herosection;
