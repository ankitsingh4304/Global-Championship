// src/App.tsx
import React, { useState } from "react";
import GameCard from "./GameCard";
import Popup from "./Popup";
import { games } from "../data/data";
import { SportsRecordType } from "../data/schema";

const App: React.FC = () => {
  // State must hold SportsRecordType
  const [selectedGame, setSelectedGame] = useState<SportsRecordType | null>(
    null
  );

  const handleCloseModel = (): void => setSelectedGame(null);

  // Handler must accept SportsRecordType
  const handleCardClick = (game: SportsRecordType): void =>
    setSelectedGame(game);

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-tr from-[#fcf0fd] to-[#c7eae6]">
        <div className="grid gap-7 grid-cols-2 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-7">
          {games.map((game, index) => (
            <GameCard key={index} game={game} onClick={handleCardClick} />
          ))}

          {selectedGame && (
            <Popup game={selectedGame} onClose={handleCloseModel} />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
