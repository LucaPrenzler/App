import { useState } from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  const [activeComponent, setActiveComponent] = useState("home");

  return (
    <div className="app">
      <nav className="nav">
        <button
          className={`nav-btn ${activeComponent === "home" ? "active" : ""}`}
          onClick={() => setActiveComponent("home")}
        >
          Home
        </button>
        <button
          className={`nav-btn ${activeComponent === "weather" ? "active" : ""}`}
          onClick={() => setActiveComponent("weather")}
        >
          Weather
        </button>
      </nav>

      <main className="main-content">
        {activeComponent === "home" && (
          <div className="home">
            <h1>Welcome to Weather App</h1>
            <p>Click on the Weather button to check the weather forecast</p>
          </div>
        )}
        {activeComponent === "weather" && <Weather />}
      </main>
    </div>
  );
}

export default App;