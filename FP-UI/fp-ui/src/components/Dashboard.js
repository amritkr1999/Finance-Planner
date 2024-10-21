import React from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  console.log("amrit ka dashboard");
  // const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {/* <button
        onClick={() => {
          navigate("/profile");
        }}
      >
        Profile
      </button>
      <button
        onClick={() => {
          navigate("/sip-calculator");
        }}
      >
        SIP Calculator
      </button>
      <button
        onClick={() => {
          navigate("/swp-calculator");
        }}
      >
        SWP Calculator
      </button> */}
    </div>
  );
};

export default Dashboard;
