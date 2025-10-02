// src/components/RankDetailPopup.tsx

import React from "react";
import type { TeamRankedType } from "./utils/calculateRanking";
import PopUp from "../../components/popUp/popUp";

interface RankDetailPopupProps {
  team: TeamRankedType | null;
  onClose: () => void;
}

const RankDetailPopup: React.FC<RankDetailPopupProps> = ({ team, onClose }) => {
  if (!team) return null;

  return (
    // Modal Backdrop
    <PopUp
      open={!!team}
      onClose={onClose}
    >
      {/* Modal Content */}
      <div
        id="popup-content"
        className="shadow-2xl w-full max-w-lg mx-4 transform scale-95 animate-popOpen hover:scale-100 transition-transform duration-300 ease-out"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Header */}
        <div className="header">
          <h3 className="">
            {team.teamName} Details
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 text-2xl font-bold transition-colors duration-200"
          >
            ✕
          </button>
        </div>

        {/* Overall Stats */}
        <p className="text-lg mb-5 text-gray-800 font-medium">
          <span className="font-bold text-teal-600">
            Overall Rank: #{team.rank}
          </span>{" "}
          |
          <span className="ml-2 font-bold text-teal-600">
            Total Points: {team.overallPoints}
          </span>
        </p>

        {/* Points by Sport */}
        <h4 className="text-xl font-semibold mb-4 text-gray-700 tracking-wide">
          Points Acquired by Sport:
        </h4>

        <ul className="distributed-points space-y-3 max-h-73 overflow-y-auto pr-2">
          {team.distributedPoints.map((sport, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-teal-50 to-white border border-teal-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <span>
                {sport.sportName}
              </span>
              <span>
                {sport.points} pts
              </span>
            </li>
          ))}
        </ul>
      </div>
    </PopUp>
  );
};

export default RankDetailPopup;
