// src/pages/RankTable.tsx
import { useState } from "react";

// Import the necessary interface
import type { TeamRankedType } from "./utils/calculateRanking";
import { calculateRankings } from "./utils/calculateRanking";
import RankDetailPopup from "./RankDetailPopup";

export default function OverallRank() {
  // Use useMemo to call the logic and ensure it runs only when needed
  const [selectedTeam, setSelectedTeam] = useState<TeamRankedType | null>(null);

  const rankings: TeamRankedType[] = calculateRankings();

  const handleRowClick = (team: TeamRankedType) => {
    setSelectedTeam(team);
  }

  //Haandle to close
  const handleClosePopup = () => {
    setSelectedTeam(null);
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-700">
        🏆 Overall Team Rankings 🏆
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-2xl border border-gray-100">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-teal-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Team Name
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">
                Overall Points
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {rankings.map((team) => (
              <tr
                key={team.teamName}
                className={`cursor-pointer 
                  team.rank === 1
                    ? "bg-yellow-50 font-bold"
                    : index % 2 === 0
                    ? "bg-white"
                    : "bg-gray-50"
                `} onClick={() => handleRowClick(team)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                  {team.rank}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-teal-800">
                  {team.teamName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-2xl text-center text-gray-900">
                  {team.overallPoints}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*Render popup conditionally*/}
      {selectedTeam && (
        <RankDetailPopup team={selectedTeam} onClose={handleClosePopup} />
      )}
    </div>
  );
};
