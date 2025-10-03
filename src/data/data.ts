import type { TeamType, SportsRecordType } from "./schema";

// // // 1. All the teams in the GC // // //
export const teams: TeamType[] = [
  {
    teamId: "team-1",
    name: "Team A",
    image: "/assets/sports/cricket/cricket_2.jpg",
  },
  {
    teamId: "team-2",
    name: "Team B",
    image: "/assets/sports/cricket/cricket_3.jpg",
  },
  {
    teamId: "team-3",
    name: "Team C",
    image: "/assets/sports/cricket/cricket_4.jpg",
  },
  {
    teamId: "team-4",
    name: "Team D",
    image: "/assets/sports/cricket/cricket_5.jpg",
  },
  {
    teamId: "team-5",
    name: "Team E",
    image: "/assets/sports/cricket/cricket_6.jpg",
  },
  {
    teamId: "team-6",
    name: "Team F",
    image: "/assets/sports/cricket/cricket_7.jpg",
  },
  {
    teamId: "team-7",
    name: "Team G",
    image: "/assets/sports/cricket/cricket_8.jpg",
  },
  {
    teamId: "team-8",
    name: "Team H",
    image: "/assets/sports/cricket/cricket_9.jpg",
  },
] as const;

// // // 2. Game data // // //
export const games: SportsRecordType[] = [
  {
    sportId: "cricket",
    title: "Cricket",
    webp: "/assets/sports/cricket/cricket_2.webp",
    image: "/assets/sports/cricket/cricket_2.jpg",
    description: "Exciting matches and tournaments for all cricket lovers.",
    matches: [
      {
        date: "2025-09-29",
        team1Id: "team-1",
        winner: "team-1",
        points: 44,
        bestPlayers: [
          {
            name: "Player 1",
            title: "Best Captain",
            image: "/assets/sports/cricket/player1.jpg",
          },
          {
            name: "Player 2",
            title: "Best Vice-Captain",
            image: "/assets/sports/cricket/player2.jpg",
          },
          {
            name: "Player 1",
            title: "Best Captain",
            image: "/assets/sports/cricket/player1.jpg",
          },
          {
            name: "Player 1",
            title: "Best Captain",
            image: "/assets/sports/cricket/player1.jpg",
          },
        ],
      },
      {
        date: "2025-09-28",
        team1Id: "team-1",
        team2Id: "team-2",
        winner: "team-1",
        points: 5,
      },
      {
        date: "2025-09-27",
        team1Id: "team-3",
        team2Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    sportId: "basketball",
    title: "Basketball",
    webp: "/assets/sports/basketball/basketball_2.webp",
    image: "/assets/sports/basketball/basketball_2.jpg",
    description: "Singles and doubles tournaments for all skill levels.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 8,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    sportId: "table-tennis",
    title: "Table Tennis",
    webp: "/assets/sports/tabletennis/tabletennis_2.webp",
    image: "/assets/sports/tabletennis/tabletennis_2.jpg",
    description: "Fast-paced fun on the table every evening.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 8,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    sportId: "badminton",
    title: "Badminton",
    webp: "/assets/sports/badminton/badminton_2.webp",
    image: "/assets/sports/badminton/badminton_2.jpg",
    description: "Singles and doubles tournaments for all skill levels.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 5,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    sportId: "kabaddi",
    title: "Kabaddi",
    webp: "/assets/sports/kabaddi/kabaddi_2.webp",
    image: "/assets/sports/kabaddi/kabaddi_2.jpg",
    description: "Join our kabaddi community with weekly matches.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 5,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    sportId: "kho-kho",
    title: "KHO KHO",
    webp: "/assets/sports/KHO KHO/KHO KHO_2.webp",
    image: "/assets/sports/KHO KHO/KHO KHO_2.jpg",
    description: "Join our KHO KHO community with weekly matches.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 5,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    sportId: "chess",
    title: "CHESS",
    webp: "/assets/sports/CHESS/CHESS_2.webp",
    image: "/assets/sports/CHESS/CHESS_2.jpg",
    description: "Join our CHESS community with weekly matches.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 5,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    sportId: "athletics",
    title: "ATHLETICS",
    webp: "/assets/sports/ATHLETICS/ATHLETICS_2.webp",
    image: "/assets/sports/ATHLETICS/ATHLETICS_2.jpg",
    description: "Join our ATHLETICS community with weekly matches.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 5,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    sportId: "tug-of-war",
    title: "TUG OF WAR",
    webp: "/assets/sports/TUG OF WAR/TUG OF WAR_2.webp",
    image: "/assets/sports/TUG OF WAR/TUG OF WAR_2.jpg",
    description: "Join our TUG OF WAR community with weekly matches.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 5,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    sportId: "fitness-challenge",
    title: "FITNESS CHALLENGE",
    webp: "/assets/sports/FITNESS CHALLENGE/FITNESS CHALLENGE_2.webp",
    image: "/assets/sports/FITNESS CHALLENGE/FITNESS CHALLENGE_2.jpg",
    description: "Join our FITNESS CHALLENGE community with weekly matches.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 5,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    sportId: "handball",
    title: "HANDBALL",
    webp: "/assets/sports/HANDBALL/HANDBALL_2.webp",
    image: "/assets/sports/HANDBALL/HANDBALL_2.jpg",
    description: "Join our HANDBALL community with weekly matches.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 5,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    sportId: "yoga",
    title: "YOGA",
    webp: "/assets/sports/YOGA/YOGA_2.webp",
    image: "/assets/sports/YOGA/YOGA_2.jpg",
    description: "Join our YOGA community with weekly matches.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 5,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    sportId: "football",
    title: "Football",
    webp: "/assets/sports/football/football_2.webp",
    image: "/assets/sports/football/football_2.jpg",
    description: "Join our football community with weekly matches.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 5,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    sportId: "volleyball",
    title: "VOLLEYBALL",
    webp: "/assets/sports/VOLLEYBALL/VOLLEYBALL_2.webp",
    image: "/assets/sports/VOLLEYBALL/VOLLEYBALL_2.jpg",
    description: "Join our volleyball community with weekly matches.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 5,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
];
