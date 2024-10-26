import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
  // 
  return(
    <BrowserRouter>
    <div>Welcome to HOME PAGE</div>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      {/* Add a NotFound route if needed */}
    </Routes>
  </BrowserRouter>
  );
};

export default App;
