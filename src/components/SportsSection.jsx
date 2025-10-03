import React from "react";
import sports from "../data/sports"; // Import the data
import SportCard from "./SportCard";   // Import the card component

const SportsSection = ({ handleSportClick }) => {
  return (
    <div className="sports-grid">
      {sports.map((sport) => (
        <SportCard
          key={sport.id}
          sport={sport}
          onClick={() => handleSportClick(sport)}
        />
      ))}
    </div>
  );
};

export default SportsSection;