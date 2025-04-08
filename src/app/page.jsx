"use client";
import LeftSide from "./components/Left";
import RightSide from "./components/RightSide";
import Middle from "./components/Middle";
import SearchField from "./components/Search";
import { useEffect, useState } from "react";
import { Racing_Sans_One } from "next/font/google";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  const [max, setMax] = useState([]);
  const [temprature, setTemprature] = useState([]);
  const [situation, setSituation] = useState("");
  const [time, setTime] = useState([]);
  const LeftImages = {
    sun: "./sun.png",
    cloud: "./CloudsSun.png",
    wind: "./WindSun.png",
    rain: "./RainSun.png",
    thunder: "./sunThunder.png",
    snow: "./SnowSun.png",
  };
  const RightImages = {
    sun: "./moon.png",
    cloud: "./CloudsNight.png",
    wind: "./NightWind.png",
    rain: "./RainNight.png",
    thunder: "./nightThunder.png",
    snow: "./SnowNight.png",
  };
  const getWeatherImage = (images) => {
    const weatherCondition = situation?.toLowerCase();
    switch (true) {
      case weatherCondition?.includes("sun"):
      case weatherCondition?.includes("clear"):
        return images.sun;
      case weatherCondition?.includes("cloud"):
        return images.cloud;
      case weatherCondition?.includes("rain"):
        return images.rain;
      case weatherCondition?.includes("wind"):
        return images.wind;
      case weatherCondition?.includes("snow"):
        return images.snow;
      case weatherCondition?.includes("storm"):
      case weatherCondition?.includes("thunder"):
        return images.wind;
      default:
        return images.sun;
    }
  };
  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomeCities = data.data.map((country) => {
      return country.cities;
    });
    incomeCities = incomeCities.flat();
    setCities(incomeCities);
  }
  // async function getCondition(city) {
  //   const condition = await fetch(
  //     `https://api.weatherapi.com/v1/forecast.json?key=edfd874e17994f16bf421254250801&q=${city}`
  //   );
  //   const conditiondata = await condition.json();
  //   setSituation(conditiondata.forecast.forecastday[0].day.condition.text);
  // }
  async function getWeather(city) {
    const weather = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=edfd874e17994f16bf421254250801&q=${city}`
    );
    const weatherdata = await weather.json();
    console.log(weatherdata.forecast.forecastday[0]);
    setMax(weatherdata.forecast.forecastday[0].day.maxtemp_c);
    setTime(weatherdata.forecast.forecastday[0].date);
    setTemprature(weatherdata.forecast.forecastday[0].day.avgtemp_c);
    setSituation(weatherdata.forecast.forecastday[0].day.condition.text);
  }

  useEffect(() => {
    getData();
    getWeather("Ulaanbaatar");
  }, []);
  const searchHandler = (e) => {
    const search = e.target.value;
    const filtered = cities.filter((city) => {
      return city.includes(search);
    });
    setSearched(filtered);
  };

  const handleClick = (city) => {
    console.log(city);
    setSelectedCity(city);
    getWeather(city);
  };
  return (
    <div className="flex gap-10 relative h-[100vh] w-[100vw] bg-[#0F141E]">
      <div className="size-full absolute flex justify-center items-center">
        <Middle />
        <RightSide
          selectedCity={selectedCity}
          situation={situation}
          time={time}
          temprature={temprature}
          RightImages={RightImages}
          getWeatherImage={getWeatherImage}
        />
        <div>
          <img src="/Ellipse 22.png" />
        </div>
      </div>

      <div className="bg-[#F3F4F6] h-[100vh] w-[50vw] ">
        <SearchField
          searchHandler={searchHandler}
          searched={searched}
          handleClick={handleClick}
        />
        <div className="h-full">
          <img src="/Ellipse 21.png" className="ml-16 h-16" />
          <div className="">
            <LeftSide
              selectedCity={selectedCity}
              situation={situation}
              time={time}
              temprature={temprature}
              max={max}
              LeftImages={LeftImages}
              getWeatherImage={getWeatherImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
