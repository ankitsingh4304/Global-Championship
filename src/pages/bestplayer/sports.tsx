import { useNavigate } from "react-router-dom";
import GameCard from "./components/gameCard/gameCard";
import { getBestPlayers, type Sport } from "./utils/bestPlayer";

export default function BestBySports() {
    const data = getBestPlayers();
    const navigate = useNavigate()
    const handleCardClick = (game: Sport): void => {
        navigate(`/players/${game.sportId}`, { state: game });
    }
    return (
        <section id="players" className="adjust-top">
            <div className="content">
                <h2>Best Players</h2>
                <div className="game-cards grid gap-7 grid-cols-2 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-7">
                    {data.map((game, index) => (
                        <GameCard key={index} game={game} onClick={handleCardClick} />
                    ))}
                </div>
            </div>
        </section>
    )
}