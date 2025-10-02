// src/components/GameCard.tsx

import React from "react";
import type { Sport } from "../../utils/bestPlayer";
import "./gameCard.scss";

interface GameCardProps {
  game: Sport;
  onClick: (game: Sport) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  // Destructuring is safe now, as SportsRecordType extends SportType
  const { title, webp, image } = game;
  const jpg = image;

  return (
    <div
      id="game-card"
      onClick={() => onClick(game)}
    >
      <picture
        className="shadow-lg shadow-teal-950/70 overflow-hidden">
        <source srcSet={webp} type="image/webp" />
        <source srcSet={jpg} type="image/jpeg" />
        <img src={jpg} alt={title} className="w-full h-48 object-cover " />
        <img
          src={jpg}
          alt={title}
          className="absolute bottom-0 left-0 w-full h-10 object-contain blur"
        />
      </picture>
      <h3>
        {title}
      </h3>
    </div>
  );
};

export default GameCard;
