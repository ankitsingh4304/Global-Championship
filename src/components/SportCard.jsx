// src/components/SportCard.jsx
import React from "react";
export default function SportCard({ sport, onClick }) {
  const src = require("../assets/" + sport.icon);
  return (
    <div className="sport-card" style={{backgroundImage: `url(${src})`}} onClick={() => onClick(sport)}>
    </div>
  );
}