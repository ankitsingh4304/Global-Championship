// src/pages/RankTable.tsx
import { useState } from "react";
//import './rank.scss'

// Import the necessary interface
import type { TeamRankedType } from "./utils/calculateRanking";
import { calculateRankings } from "./utils/calculateRanking";
import RankDetailPopup from "./RankDetailPopup";
import Table from "../../components/table/table";

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
    <div className="relative min-h-screen bg-gradient-to-tr from-[#fcf0fd] to-[#efc1a8] adjust-top p-3 mx-auto">
      <div className="stats">
        <h2 className="text-3xl font-bold mb-6 text-center font-[Brave81] text-black mt-5 tracking-widest">
          Team Standings
        </h2>
       {/** <div className="table-container overflow-x-auto bg-white shadow-2xl border border-gray-100"> */}
          <Table
            columns={["Rank", "Teams", "Points"]}
            rows={rankings.map((team) => [team.rank.toString(), team.teamName, team.overallPoints.toString()])}
            onRowClick={(index) => handleRowClick(rankings[index])}
          />
        {/**</div>*/}
        {/*Render popup conditionally*/}
        {selectedTeam && (
          <RankDetailPopup team={selectedTeam} onClose={handleClosePopup} />
        )}
      </div>
    </div>
  );
};
