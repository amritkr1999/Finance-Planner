import React, { useState } from 'react';

const SWPCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState('');
  const [annualReturn, setAnnualReturn] = useState('');
  const [duration, setDuration] = useState('');
  const [finalValue, setFinalValue] = useState(null);

  const calculateSWP = () => {
    const P = parseFloat(initialInvestment);
    const W = parseFloat(monthlyWithdrawal);
    const r = parseFloat(annualReturn) / 100 / 12; // Monthly return
    const n = parseFloat(duration) * 12; // Total months

    if (isNaN(P) || isNaN(W) || isNaN(r) || isNaN(n) || r < 0) {
      alert('Please enter valid values.');
      return;
    }

    let remainingAmount = P;
    for (let month = 1; month <= n; month++) {
      remainingAmount = remainingAmount * (1 + r) - W;
      if (remainingAmount < 0) break; // Stop if funds are exhausted
    }

    setFinalValue(remainingAmount < 0 ? 0 : remainingAmount.toFixed(2));
  };

  return (
    <div>
      <h1>SWP Calculator</h1>
      <label>
        Initial Investment (in ₹):
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Monthly Withdrawal Amount (in ₹):
        <input
          type="number"
          value={monthlyWithdrawal}
          onChange={(e) => setMonthlyWithdrawal(e.target.value)}
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
      <label>
        Duration (in years):
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </label>
      <br />
      <button onClick={calculateSWP}>Calculate</button>
      {finalValue !== null && (
        <h2>Remaining Amount After Withdrawals: ₹{finalValue}</h2>
      )}
    </div>
  );
};

export default SWPCalculator;

  