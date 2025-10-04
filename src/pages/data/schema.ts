import { teams } from "./data"; // Keep import for other uses like getting team names later

export interface TeamType {
  teamId: string;
  name: string;
  image: string;
}

export interface SportType {
  title: string;
  webp: string;
  image: string;
  description: string;
}

//Simplify TeamId to avoid circular dependency
export type TeamId = string;

export interface SportsRecordType extends SportType {
  matches: MatchType[];
}

export interface BestPlayerType {
  name: string;
  title: string;
  image: string;
}

export interface MatchType {
  date: string;
  team1Id: TeamId;
  team1Points?: number;
  team2Id?: TeamId;
  team2Points?: number;
  winner: TeamId;
  points: number;
  bestPlayers?: BestPlayerType[];

  // Added properties for the Popup component
  bestBatsman?: string;
  bestBowler?: string;
  bestRunner?: string;
  secondRunner?: string;
}
