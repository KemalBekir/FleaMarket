import React from "react";
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img className="spinner" src="/assets/Spinner.svg" alt="Loading"></img>
    </div>
  );
};

export default Spinner;
