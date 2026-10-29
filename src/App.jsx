import React, { useState } from 'react';
import './App.css';

function App() {
  const studentInfo = {
    fullName: "CHELSEA JAENA MANGULABNAN",
    section: "BSITWMD-3A",
    subjCode: "C-PCIT9"
  };

  const [display, setDisplay] = useState("10 Things That Require Zero Talent");

  const keyMappings = {
    '1': "Being On Time",
    '2': "Making An Effort",
    '3': "Being High Energy",
    '4': "Having A Positive Attitude",
    '5': "Being Passionate",
    '6': "Using Good Body Language",
    '7': "Being Coachable",
    '8': "Doing A Little Extra",
    '9': "Being Prepared",
    '0': "Having A Strong Work Ethic",
    'NAME': studentInfo.fullName.toUpperCase(),
    'SUBJ': studentInfo.subjCode.toUpperCase()
  };

  const handleKeyPress = (key) => {
    if (keyMappings[key]) {
      setDisplay(keyMappings[key]);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        {/* Requirement A: Header inside the top of the card */}
        <h1 className="header-title">
          {studentInfo.fullName.toUpperCase()} - {studentInfo.section.toUpperCase()}
        </h1>

        {/* Display Screen */}
        <div className="display-screen">
          <p>{display}</p>
        </div>

        {/* Keypad Layout: Exact button placement from screenshot */}
        <div className="keypad">
          <div className="row">
            <button className="btn" onClick={() => handleKeyPress('7')}>7</button>
            <button className="btn" onClick={() => handleKeyPress('8')}>8</button>
            <button className="btn" onClick={() => handleKeyPress('9')}>9</button>
          </div>
          <div className="row">
            <button className="btn" onClick={() => handleKeyPress('4')}>4</button>
            <button className="btn" onClick={() => handleKeyPress('5')}>5</button>
            <button className="btn" onClick={() => handleKeyPress('6')}>6</button>
          </div>
          <div className="row">
            <button className="btn" onClick={() => handleKeyPress('1')}>1</button>
            <button className="btn" onClick={() => handleKeyPress('2')}>2</button>
            <button className="btn" onClick={() => handleKeyPress('3')}>3</button>
          </div>
          <div className="row">
            <button className="btn" onClick={() => handleKeyPress('NAME')}>NAME</button>
            <button className="btn" onClick={() => handleKeyPress('0')}>0</button>
            <button className="btn" onClick={() => handleKeyPress('SUBJ')}>SUBJ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;