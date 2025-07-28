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

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const [hovered, setHovered] = useState(null);

  const calculateEMI = () => {
    const p = parseFloat(amount);
    const r = parseFloat(interest) / 12 / 100;
    const n = parseFloat(tenure) * 12;

    if (!p || !r || !n || isNaN(p) || isNaN(r) || isNaN(n)) {
      alert('Please enter valid EMI details.');
      return;
    }

    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2));
  };

  const calculateFutureValue = () => {
    const pmt = parseFloat(investAmt);
    const r = parseFloat(rate) / 100;
    const n = parseFloat(years);

    if (!pmt || !r || !n || isNaN(pmt) || isNaN(r) || isNaN(n)) {
      alert('Please enter valid investment details.');
      return;
    }

    const fv = pmt * ((Math.pow(1 + r, n) - 1) / r);
    setFutureValue(fv.toFixed(2));
  };

  const handleSubmit = () => {
    if (name.trim() === '') {
      alert('Please enter your name!');
      return;
    }
    setSubmittedName(name);
  };

  return (
    
    <div className="tools-container">
    
      {/* EMI Calculator */}
      <div
        className={`tool emi-tool ${hovered === 'emi' ? 'expand' : hovered === 'invest' ? 'shrink' : ''}`}
        onMouseEnter={() => setHovered('emi')}
        onMouseLeave={() => setHovered(null)}
      >
      
        <div className="floating-blobs">
  <div className="blob pink"></div>
  <div className="blob blue"></div>
</div>

        <h2>🏦 EMI Calculator</h2>
        <input
          type="number"
          placeholder="Loan Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
        <input
          type="number"
          placeholder="Tenure (Years)"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
        />
        <button onClick={calculateEMI}>Calculate EMI</button>
        {emi && <p>Estimated EMI: ₹ {emi} / month</p>}
      </div>

      {/* Investment Calculator */}
      <div
        className={`tool invest-tool ${hovered === 'invest' ? 'expand' : hovered === 'emi' ? 'shrink' : ''}`}
        onMouseEnter={() => setHovered('invest')}
        onMouseLeave={() => setHovered(null)}
      >
        <h2>📈 Investment Estimator</h2>
        <input
          type="number"
          placeholder="Monthly Investment (₹)"
          value={investAmt}
          onChange={(e) => setInvestAmt(e.target.value)}
        />
        <input
          type="number"
          placeholder="Annual Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Investment Duration (Years)"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
        <button onClick={calculateFutureValue}>Calculate Future Value</button>
        {futureValue && <p>Future Value: ₹ {futureValue}</p>}
      </div>

      {/* Brochure Download + Consultation */}
      <div className="brochure-download">
        <a href="/brochure.pdf" download>📄 Download Brochure for Free</a>
        <button onClick={() => setShowModal(true)}>Request Free Consultation</button>
      </div>

      {/* Modal for Consultation */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            {submittedName ? (
              <h3>🙏 Thank you, {submittedName}!<br />We’ll contact you soon.</h3>
            ) : (
              <>
                <h3>📞 Request Free Consultation</h3>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  placeholder="Tell us your requirement..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="submit-btn" onClick={handleSubmit}>Submit Request</button>
                <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
              </>
            )}
          </div>
        </div>
      )}
      
{/* ✅ Gradient Blur Overlay */}
<div className="floating-blobs">
  <span></span>
  <span></span>
  <span></span>
</div>

<div className="gradient-blur-overlay"></div>

      {/* ✅ Animated SVG Wave */}
      <div className="animated-waves">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="#4b6cb7" 
            fillOpacity="0.3" 
            d="M0,128L40,160C80,192,160,256,240,256C320,256,400,192,480,160C560,128,640,128,720,160C800,192,880,256,960,266.7C1040,277,1120,235,1200,218.7C1280,203,1360,213,1400,218.7L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default ToolsPage;
