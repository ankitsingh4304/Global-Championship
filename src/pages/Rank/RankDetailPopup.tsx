// src/components/RankDetailPopup.tsx

import React from "react";
import { TeamRankedType } from "./utils/calculateRanking";

interface RankDetailPopupProps {
  team: TeamRankedType | null;
  onClose: () => void;
}

const RankDetailPopup: React.FC<RankDetailPopupProps> = ({ team, onClose }) => {
  if (!team) return null;

  return (
    // Modal Backdrop
    <div
      className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Close on backdrop click
    >
      {/* Modal Content */}
      <div
        className="bg-gradient-to-br from-white to-teal-50 p-6 rounded-2xl shadow-2xl w-full max-w-lg mx-4 transform scale-95 animate-popOpen hover:scale-100 transition-transform duration-300 ease-out"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-5 border-b-2 border-teal-100 pb-3">
          <h3 className="text-3xl font-extrabold text-teal-700 tracking-wide">
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

        <ul className="space-y-3 max-h-72 overflow-y-auto pr-2">
          {team.distributedPoints.map((sport, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-teal-50 to-white border border-teal-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <span className="font-medium text-gray-800">
                {sport.sportName}
              </span>
              <span className="font-bold text-lg text-teal-700">
                {sport.points} pts
              </span>
            </li>
          ))}
        </ul>

        {/* Footer or extra button (optional) */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RankDetailPopup;
