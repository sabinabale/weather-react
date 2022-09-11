import "./App.css";
import React from "react";
import "./SearchEngine.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <p>
        This project was coded by Sabina and is hosted on{" "}
        <a
          href="https://github.com/sabinabale/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}
