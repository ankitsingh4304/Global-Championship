import { games } from "../../data/data";

export interface Sport {
  title: string;
  image: string;
  bestPlayers: {
    name: string;
    title: string;
    image: string;
  }[];
}

export function getBestPlayers(): Sport[] {
  const sports: Sport[] = [];

  for (const game of games) {
    const newSport: Sport = {
      title: game.title,
      image: game.image,
      bestPlayers: [],
    };

    for (const match of game.matches) {
      if (match.bestPlayers) {
        newSport.bestPlayers.push(...match.bestPlayers);
      }
    }

    if (newSport.bestPlayers.length > 0) {
      sports.push(newSport);
    }
  }

  return sports;
}
