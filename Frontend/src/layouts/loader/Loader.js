// Loader.js

import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "./loader.scss";

const Loader = () => {
  const fallbackSpinnerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const envelopeStyle = {
    fontSize: "3em",
    color: "#3498db", // Envelope color - you can change this to your preferred color
    animation: "float 1s ease-in-out infinite",
  };

  return (
    <div style={fallbackSpinnerStyle}>
      <FaEnvelope style={envelopeStyle} />
    </div>
  );
};

export default Loader;
