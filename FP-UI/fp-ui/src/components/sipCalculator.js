import React, { useState } from 'react';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [investmentDuration, setInvestmentDuration] = useState('');
  const [annualReturn, setAnnualReturn] = useState('');
  const [futureValue, setFutureValue] = useState(null);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const n = parseFloat(investmentDuration) * 12; // Convert years to months
    const r = parseFloat(annualReturn) / 100 / 12; // Monthly interest rate

    if (isNaN(P) || isNaN(n) || isNaN(r) || r <= 0) {
      alert('Please enter valid values.');
      return;
    }

    let totalFutureValue = 0;
    for (let month = 1; month <= n; month++) {
      totalFutureValue += P * Math.pow(1 + r, month);
    }

    setFutureValue(totalFutureValue.toFixed(2));
  };

  return (
    <div>
      <h1>SIP Calculator</h1>
      <label>
        Monthly Investment (in ₹):
        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Investment Duration (in years):
        <input
          type="number"
          value={investmentDuration}
          onChange={(e) => setInvestmentDuration(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Expected Annual Return Rate (in %):
        <input
          type="number"
          value={annualReturn}
          onChange={(e) => setAnnualReturn(e.target.value)}
          required
        />
      </label>
      <br />
      <button onClick={calculateSIP}>Calculate</button>
      {futureValue !== null && (
        <h2>Future Value of Investment: ₹{futureValue}</h2>
      )}
    </div>
  );
};

export default SIPCalculator;
