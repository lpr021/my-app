import React, { useState } from 'react';
import './ToolsPage.css';

function ToolsPage() {
  const [emi, setEmi] = useState('');
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [tenure, setTenure] = useState('');

  const [investAmt, setInvestAmt] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [futureValue, setFutureValue] = useState('');

  const [modalOpen, setModalOpen] = useState(false);

  const calculateEMI = () => {
    const principal = parseFloat(amount);
    const annualRate = parseFloat(interest);
    const months = parseFloat(tenure) * 12;

    const monthlyRate = annualRate / 12 / 100;
    const emiVal = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                   (Math.pow(1 + monthlyRate, months) - 1);

    if (!isNaN(emiVal)) setEmi(emiVal.toFixed(2));
  };

  const calculateInvestment = () => {
    const P = parseFloat(investAmt);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);

    const FV = P * Math.pow(1 + r, t);

    if (!isNaN(FV)) setFutureValue(FV.toFixed(2));
  };

  return (
    <div className="tools-page">
      <h1>Smart Financial Tools</h1>

      <div className="tool-cards-grid">
        {/* EMI Calculator */}
        <div className="tool-card">
          <h2>EMI Calculator</h2>
          <input type="number" placeholder="Loan Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <input type="number" placeholder="Interest Rate (%)" value={interest} onChange={(e) => setInterest(e.target.value)} />
          <input type="number" placeholder="Tenure (Years)" value={tenure} onChange={(e) => setTenure(e.target.value)} />
          <button onClick={calculateEMI}>Calculate EMI</button>
          {emi && <p>Monthly EMI: ₹{emi}</p>}
        </div>

        {/* Investment Estimator */}
        <div className="tool-card">
          <h2>Investment Estimator</h2>
          <input type="number" placeholder="Investment Amount" value={investAmt} onChange={(e) => setInvestAmt(e.target.value)} />
          <input type="number" placeholder="Interest Rate (%)" value={rate} onChange={(e) => setRate(e.target.value)} />
          <input type="number" placeholder="Years" value={years} onChange={(e) => setYears(e.target.value)} />
          <button onClick={calculateInvestment}>Estimate Future Value</button>
          {futureValue && <p>Future Value: ₹{futureValue}</p>}
        </div>
      </div>

      {/* Free Consultation */}
      <div className="tool-card consultation-card">
        <h2>Free Real Estate Consultation</h2>
        <p>Submit your query and our team will reach out to you.</p>
        <button onClick={() => setModalOpen(true)}>Get Free Consultation</button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setModalOpen(false)}>&times;</button>
            <h3>Consultation Request</h3>
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Phone Number" />
            <textarea rows="4" placeholder="Your Query"></textarea>
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToolsPage;
