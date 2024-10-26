import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import SIPCalculator from "./components/sipCalculator"

function App() {
  // 
  return(
    <BrowserRouter>
    <div>Welcome to HOME PAGE</div>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sip" element={<SIPCalculator />} />
      {/* Add a NotFound route if needed */}
    </Routes>
  </BrowserRouter>
  );
};

export default App;
