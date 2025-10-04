import { useMemo, useEffect } from "react";
import { getBestPlayers, Sport } from "./utils/bestPlayer";
import { SportsRecordType } from "../data/schema";

interface PopupProps {
  game: SportsRecordType | null;
  onClose: () => void;
}

const BestPlayer: React.FC<PopupProps> = ({ game, onClose }) => {
  if (!game) return null;

  const allBestSports: Sport[] = useMemo(() => getBestPlayers(), []);
  const sportToDisplay: Sport | undefined = useMemo(() => {
    return allBestSports.find((s) => s.title === game.title);
  }, [game, allBestSports]);

  const playersToDisplay = sportToDisplay?.bestPlayers || [];
  const sportTitle = sportToDisplay?.title || game?.title || "Selected Sport";
  const displayTitle = `${sportTitle} Best Players`;

  return (
    <div
      className="fixed inset-0 backdrop-blur-md bg-gray-200/10 flex items-center justify-center z-50 p-3 "
      onClick={onClose}
    >
      {/* Card */}
      <div
        className="relative w-full max-w-6xl rounded-3xl  border-4 border-emerald-500/30 shadow-2xl shadow-emerald-500/30 overflow-hidden animate-popOpen overflow-y-auto h-[90vh] scrollbar-thin scrollbar-thumb-emerald-500/50 scrollbar-track-gray-200/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-800 hover:text-emerald-400 text-5xl font-semibold transition-colors z-10"
        >
          &times;
        </button>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-10 mb-12 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] tracking-wide font-brave81">
          {displayTitle}
        </h1>

        {playersToDisplay.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-8 pb-12">
            {playersToDisplay.map((player, index) => (
              <div
                key={`${sportTitle}-${player.name}-${index}`}
                className="group relative rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 shadow-xl border border-gray-700 hover:border-emerald-400 transition-all duration-300 hover:shadow-emerald-500/40 hover:scale-105"
              >
                {/* Player image */}
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-emerald-500/40 shadow-md group-hover:shadow-emerald-400/60 transition-shadow mb-6">
                  <img
                    src={
                      game.image ||
                      "https://via.placeholder.com/150/0f172a/d1d5db?text=Player"
                    }
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Player name */}
                <h3 className="text-2xl font-bold text-white mb-2 text-center group-hover:text-emerald-300 transition-colors">
                  {player.name}
                </h3>

                {/* Player role/title */}
                <p className="text-md font-semibold text-emerald-400 text-center uppercase tracking-wide">
                  {player.title}
                </p>

                {/* Sport tag */}
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {sportTitle}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center text-lg mt-10 pb-12">
            No elite player data found for {sportTitle}.
          </p>
        )}
      </div>
    </div>
  );
};

export default BestPlayer;
