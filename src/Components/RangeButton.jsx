import React, { useState } from "react";
import "./CSS/RangeButton.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const RangeButton = ({ btnName }) => {
  const [volume, setVolume] = useState(50);
  const [show, setShow] = useState(false);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="range-button-container">
      <button className="hide" onClick={() => setShow(!show)}>
        {btnName}  {show ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      <div style={{ display: show ? "block" : "none" }}>
        <label htmlFor="volume">Rupees{volume}</label>
        <br />

        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="5000"
          value={volume}
          onChange={handleVolumeChange}
        />

        <div className="Set-range-button">
          <button className="rangebtn" onClick={() => setVolume(500)}>
            500
          </button>
          <button className="rangebtn" onClick={() => setVolume(100)}>
            100
          </button>
          <button className="rangebtn" onClick={() => setVolume(1000)}>
            1000
          </button>
          <button className="rangebtn" onClick={() => setVolume(5000)}>
            5000
          </button>
        </div>
      </div>
    </div>
  );
};

export default RangeButton;
