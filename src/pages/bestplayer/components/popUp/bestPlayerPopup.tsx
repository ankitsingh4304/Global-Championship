import React from "react";
import { type MatchType } from "../../utils/bestPlayer";

interface BestPlayerPopupProps {
  match?: MatchType;
  onClose: () => void;
  onPlayerClick?: (playerName: string) => void; // optional handler for row click
}

export default function BestPlayerPopup({ match, onClose, onPlayerClick }: BestPlayerPopupProps) {
  if (!match) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-2"
      onClick={onClose} // close when clicking backdrop
    >
      {/* Popup container */}
      <div
        className="relative w-full max-w-5xl bg-gray-800 border border-teal-800 rounded-2xl shadow-2xl shadow-sky-400/30 p-6 mt-20 max-h-[80vh] overflow-y-auto animate-popOpen"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside popup
        style={{ animation: "popOpen 0.3s ease-out forwards" }}
      >
        {/* Header */}
        <div className="pb-4 mb-4 border-b border-gray-600">
          <h3 className="text-2xl font-bold text-center text-white">Match MVPs</h3>
          <button
            onClick={onClose}
            className="absolute top-3 right-10 text-4xl font-semibold  text-gray-400 transition-colors duration-200 rounded-full hover:bg-gray-700 hover:text-white"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* MVP Players */}
        {match.bestPlayers && match.bestPlayers.length > 0 ? (
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]">
            {match.bestPlayers.map((player) => (
              <div
                key={player.name}
                onClick={() => onPlayerClick?.(player.name)} // 🔥 row click handler
                className="flex flex-col items-center justify-between transition-transform duration-300 transform bg-white/5 rounded-3xl group hover:-translate-y-2 p-4 shadow-md h-72 cursor-pointer"
              >
                <div className="w-28 h-28 overflow-hidden border-3 rounded-full shadow-lg border-emerald-500/50 group-hover:border-emerald-400">
                  <img
                    src={
                      player.image ||
                      `https://ui-avatars.com/api/?name=${player.name.replace(
                        " ",
                        "+"
                      )}&background=0f172a&color=d1d5db&size=128`
                    }
                    alt={player.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-bold text-center text-white transition-colors group-hover:text-emerald-300 tracking-wider">
                    {player.name}
                  </h4>
                  <p className="mt-1 font-semibold tracking-widest text-center uppercase text-md text-emerald-400">
                    {player.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-gray-400">
            No MVP data is available for this match.
          </p>
        )}
      </div>
    </div>
  );
}
