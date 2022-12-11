import React, { useState } from "react";
import "./App.css";

function App() {
  const [temperatureValue, settemperatureValue] = useState(10);
  const [temperatureColor, settemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperatureValue === 30) return;

    settemperatureValue(temperatureValue + 1);
    if (temperatureValue >= 15) {
      settemperatureColor("hot");
    }
  };

  const decreaseTemperature = () => {
    if (temperatureValue === 0) return;
    settemperatureValue(temperatureValue - 1);
    if (temperatureValue < 20) {
      settemperatureColor("cold");
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onMouseDown={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
}

export default App;
