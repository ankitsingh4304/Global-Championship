import React from "react";
import GameCard from "./gameCard/gameCard.tsx";   // Imports GameCard.tsx
import { getBestPlayers } from "../utils/bestPlayer.ts";

function SportsSection({ handleSportClick }) {
  const data = getBestPlayers();
  return (
    <div className="grid gap-6 grid-cols-2 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5">
      {data.map((game, index) => (
        <GameCard key={index} game={game} onClick={handleSportClick} />
      ))}
    </div>
  );
}

export default SportsSection;