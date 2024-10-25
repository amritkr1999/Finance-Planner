import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
// import profile from "./components/Profile";         // Assuming you have a Profile component
import sipCalculator from "./components/sipCalculator"; // Assuming you have a SIP Calculator component
import swpCalculator from "./components/swpCalculator";

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/profile" element={<profile />} />
        <Route path="/sip-calculator" element={<sipCalculator />} />
        <Route path="/swp-calculator" element={<swpCalculator />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
