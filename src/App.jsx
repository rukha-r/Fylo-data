import React, { useState, useRef } from "react";
import "./App.scss";
import logo from "./assets/logo.svg";
import { FaFile, FaFolder, FaUpload } from "react-icons/fa";

function App() {
  console.log(window.innerWidth);
  const max = 1000;
  const [used, setUsed] = useState(177);
  const [left, setLeft] = useState(Math.round(max - used));
  const range_val = useRef();
  const updateRange = () => {
    setUsed(range_val.current.value);
    setLeft(Math.round(max - used));
  };
  return (
    <div className="main-wrapper">
      <div className="body">
        <div className="left-side">
          <img src={logo} alt="logo" />
          <div className="icon-holder">
            <FaFile className="icon" />
            <FaFolder className="icon" />
            <FaUpload className="icon" />
          </div>
        </div>
        <div className="right-side">
          <div className="leftover">
            <h1>{left} </h1>
            <small> GB LEFT</small>
          </div>
          <p>
            You’ve used <span>{used} GB </span> of your storage...
          </p>
          <div className="range">
            <input
              ref={range_val}
              onChange={updateRange}
              type="range"
              min="0"
              max={max}
              value={used}
            />
            <div>
              <p className="min">
                <span>0</span> GB
              </p>
              <p className="max">
                <span>{max}</span> GB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
