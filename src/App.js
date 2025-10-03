    import React, { useEffect } from "react";
    import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
    import Navbar from "./components/navbar";
    import Home from "./pages/home";
    import Sports from "./pages/sports";
    import BestPlayers from "./pages/bestplayer";
    import OverallRank from "./pages/rank";
    import "./App.css"; // Import styles

    // Custom component to manage dynamic Navbar styling based on route
    function AppContent() {
        const location = useLocation();

        useEffect(() => {
            const navbar = document.querySelector('.navbar');
            // Check if we are on the home page path
            if (location.pathname === '/') {
                navbar.classList.remove('navbar-solid');
            } else {
                navbar.classList.add('navbar-solid');
            }
        }, [location.pathname]);

        return (
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Placeholder Routes */}
                    <Route path="/sports" element={<Sports />} />
                    <Route path="/best-players" element={<BestPlayers />} />
                    <Route path="/overall-rank" element={<OverallRank />} />
                    <Route path="/rulebook" element={<div><h1>Rulebook Page</h1><p style={{padding: '100px', textAlign: 'center'}}>Content coming soon!</p></div>} />
                </Routes>
            </>
        );
    }

    function App() {
    return (
        <Router>
        <AppContent />
        </Router>
    );
    }

    export default App;
