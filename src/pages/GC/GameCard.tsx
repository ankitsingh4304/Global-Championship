// src/components/GameCard.tsx

import React from "react";
import { SportsRecordType } from "../data/schema";

interface GameCardProps {
  game: SportsRecordType;
  onClick: (game: SportsRecordType) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  // Destructuring is safe now, as SportsRecordType extends SportType
  const { title, webp, image } = game;
  const jpg = image;

  return (
    <div
      className="relative bg-white
                        rounded-3xl shadow-lg shadow-teal-950/70 lg:animate-none
                        lg:hover:scale-105 transition-transform duration-500 overflow-hidden animate-scalePulse"
      onClick={() => onClick(game)}
    >
      <picture>
        <source srcSet={webp} type="image/webp" />
        <source srcSet={jpg} type="image/jpeg" />
        <img src={jpg} alt={title} className="w-full h-48 object-cover " />
        <img
          src={jpg}
          alt={title}
          className="absolute bottom-0 left-0 w-full h-10 object-contain blur"
        />
      </picture>
      <div className="bottom-0 left-5 absolute">
        <h2 className="font-brave81 text-xl font-semibold text-white mb-2 tracking-widest">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default GameCard;
