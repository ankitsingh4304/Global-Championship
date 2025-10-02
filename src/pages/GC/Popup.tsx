// Popup.tsx

import React from "react";
import { SportsRecordType } from "../data/schema";
import { getTeamName } from "../data/operators"; // Assuming this utility is available

interface PopupProps {
  game: SportsRecordType | null;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ game, onClose }) => {
  if (!game) return null;

  // Spread and sort the 'matches' array
  const sortedMatches = [...game.matches].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-5 flex items-center justify-center z-50">
      <div
        className="p-4 rounded-2xl w-11/12 sm:w-3/4 md:w-2/3 lg:w-[90vw] mx-auto h-[90vh] shadow-md shadow-emerald-300/15 relative animate-popOpen"
        // game now correctly has 'image' property
        style={{
          backgroundImage: `url(${game.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-gray-700 hover:text-black "
        >
          ✕
        </button>

        {/* game now correctly has 'title' property */}
        <h2 className="text-xl font-bold mb-4">{game.title} Matches</h2>

        <div className="space-y-3 max-h-100 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pr-2">
          {sortedMatches.map((match, index) => (
            <div
              key={index}
              className="p-3 border rounded-md bg-gray-50 break-words whitespace-normal"
            >
              <p>Date: {match.date}</p>
              {/* Check if there are two teams using team2Id */}
              {match.team2Id ? (
                <>
                  {/*Use getTeamName utility for names */}
                  <p>
                    {getTeamName(match.team1Id)} VS {getTeamName(match.team2Id)}
                  </p>
                  <p>
                    {/*Use winner ID directly */}
                    Winner: {getTeamName(match.winner)} ({match.points})
                  </p>
                </>
              ) : (
                // For single-team matches (e.g., individual sports)
                <p>Winner: {getTeamName(match.team1Id)} </p>
              )}

              {/* These are now correctly typed as optional strings */}
              {match.bestBatsman && <p>Best Batsman: {match.bestBatsman}</p>}
              {match.bestBowler && <p>Best Bowler: {match.bestBowler}</p>}
              {match.bestRunner && <p>Best Runner: {match.bestRunner}</p>}
              {match.secondRunner && <p>Second Runner: {match.secondRunner}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
