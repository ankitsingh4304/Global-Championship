import PopUp from "../../../../components/popUp/popUp";
import { type MatchType } from "../../utils/bestPlayer";
//import './bestPlayerPopup.scss';

interface PopupProps {
  match: MatchType;
  onClose: () => void;
}

export default function BestPlayerPopup({ match, onClose }: PopupProps) {
  return (
    <PopUp
      open={!!match}
      className="best-player-popup"
      onClose={onClose}
    >
      <div
        className="popup-content"
        onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <h3>Best Players</h3>
          <button
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        {match.bestPlayers.length > 0 ? (
          <div className="player-cards">
            {match.bestPlayers.map((player, index) => (
              <div
                key={`${player.name}-${index}`}
                className="player-card"
              >
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-black-500/40 shadow-md group-hover:shadow-emerald-400/60 mb-6">
                  <img
                    src={
                      player.image ||
                      "https://via.placeholder.com/150/0f172a/d1d5db?text=Player"
                    }
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center group-hover:text-emerald-300 transition-colors">
                  {player.name}
                </h3>
                <p className="text-md font-semibold text-emerald-400 text-center uppercase tracking-wide">
                  {player.title}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center text-lg mt-10 pb-12">
            No elite player data found.
          </p>
        )}
      </div>
    </PopUp>
  );
};
