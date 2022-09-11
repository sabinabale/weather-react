import "./App.css";
import React from "react";
import "./SearchEngine.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
    </div>
  );
}
