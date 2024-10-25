import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  // 
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button
        onClick={() => {
          // navigate("/profile");
        }}
      >
        Profile
      </button>
      <button
        onClick={() => {
          // navigate("/sip-calculator");
        }}
      >
        SIP Calculator
      </button>
      <button
        onClick={() => {
          // navigate("/swp-calculator");
        }}
      >
        SWP Calculator
      </button>
    </div>
  );
}

export default App;
