// src/App.tsx
// import { useState } from "react";
// import GameCard from "./components/gameCard";
// import Popup from "./bestPlayerPopup";
// import { games } from "../../data/data";
// import type { SportsRecordType } from "../../data/schema";
import { useLocation } from "react-router-dom";
import "./players.scss"
import type { Sport, MatchType } from "./utils/bestPlayer";
import Table from "../../components/table/table";
import { useState } from "react";
import BestPlayerPopup from "./components/popUp/bestPlayerPopup";

export default function BestPlayers() {
  const location = useLocation();
  const game: Sport = location.state;
  const [selectedMatch, setSelectedMatch] = useState<MatchType | null>(null)

  return (
    <article id="rank" className="adjust-top p-8 max-w-7xl mx-auto">
      <div className="stats">
        <h2 className="text-3xl font-bold mb-6 text-center text-black-700">
          {game.title}
        </h2>
        <div className="table-container overflow-x-auto bg-white shadow-2xl border border-gray-100">
          <Table
            columns={["Date", "Teams", "Winner"]}
            rows={game.matches.map((match) => [match.date, `${match.team1}${match.team2.length > 0 ? ' vs ' + match.team2 : ''}`, match.winner])}
            onRowClick={(index) => setSelectedMatch(game.matches[index])}
          />
        </div>
        {selectedMatch && (
          <BestPlayerPopup match={selectedMatch} onClose={() => setSelectedMatch(null)} />
        )}
      </div>
    </article>
  );
};




// const [selectedGame, setSelectedGame] = useState<SportsRecordType | null>(
//   null
// );

// const handleCloseModel = (): void => setSelectedGame(null);

// // Handler must accept SportsRecordType
// const handleCardClick = (game: SportsRecordType): void =>
//   setSelectedGame(game);

{/* <section id="players" className="adjust-top">
  <div className="content">
    <h2>Best Players</h2>
    <div className="game-cards grid gap-7 grid-cols-2 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-7">
      {games.map((game, index) => (
        <GameCard key={index} game={game} onClick={handleCardClick} />
      ))}

      {selectedGame && (
        <Popup game={selectedGame} onClose={handleCloseModel} />
      )}
    </div>
  </div>
</section> */}