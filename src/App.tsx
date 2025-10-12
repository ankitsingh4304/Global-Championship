import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss'
import './App.css'

import Navbar from './components/navbar/navbar';

// Pages
import Home from './pages/home/home';
import Sports from "./pages/sports/sports.jsx";
import OverallRank from "./pages/rank/rank";
import BestPlayers from "./pages/bestplayer/players";
import Rulebook from "./pages/rulebook/rulebook";
import Page404 from "./pages/page404/page404";
import BestBySports from "./pages/bestplayer/sports";
import Footer from "./components/footer/Footer";

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   const navbar = document.querySelector('.navbar');
  //   // Check if we are on the home page path
  //   if (location.pathname === '/') {
  //     navbar?.classList.remove('navbar-solid');
  //   } else {
  //     navbar?.classList.add('navbar-solid');
  //   }
  // }, [location.pathname]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/rank" element={<OverallRank />} />
        <Route path="/players" element={<BestBySports />} />
        <Route path="/players/:sportId" element={<BestPlayers />} />
        <Route path="/rulebook" element={<Rulebook />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
