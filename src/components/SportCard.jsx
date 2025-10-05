// src/components/SportCard.jsx
import React from "react";
export default function SportCard({ sport, onClick }) {
  const src = new URL(`../assets/sportcard/${sport.icon}`, import.meta.url).href;
  return (
    <div className="sport-card" style={{ backgroundImage: `url(${src})`}} onClick={() => onClick(sport)}>
    </div>
  );
}