import { Link } from "react-router-dom";
import logo from "../../assets/gclogo.png";
import "./navbar.scss";

const Navbar = () => (
	<nav className='navbar'>
		{/* Left side: Logo + Title wrapped in Link */}
		<div className='navbar-left'>
			<Link to='/' className='navbar-logo-link'>
				<img src={logo} alt='GC Logo' />
				<div>
					<h1>SHAURYA</h1>
					<span>The Sports Committee</span>
				</div>
			</Link>
		</div>

		{/* Right side: Navigation links */}
		<div className='navbar-right'>
			<Link to='/sports'>Sports</Link>
			<Link to='/rank'>Overall Rank</Link>
			<Link to='/players'>Best Players</Link>
			<Link to='/rulebook'>Rulebook</Link>
		</div>
	</nav>
);

export default Navbar;
