import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OverallRank from "./pages/Rank/RankTable";
import BestPlayer from "./pages/BestPlayer/Bestplayer";

import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/rank" element={<OverallRank />} />
                <Route path="/bestplayer" element={<BestPlayer />} />
                
                <Route
                    path="*"
                    element={
                        <div className="text-center p-24 bg-red-100 text-red-800 font-bold text-4xl">
                            404 Page Not Found
                        </div>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
