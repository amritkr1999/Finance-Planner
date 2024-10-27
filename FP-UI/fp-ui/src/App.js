import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import SIPCalculator from "./components/sipCalculator"
import SWPCalculator from "./components/swpCalculator";

function App() {
  // 
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sip" element={<SIPCalculator />} />
      <Route path="/swp" element={<SWPCalculator />} />
      {/* Add a NotFound route if needed */}
    </Routes>
  </BrowserRouter>
  );
};

export default App;
