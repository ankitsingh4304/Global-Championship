import { NavLink } from "react-router-dom";
import "./navbar.scss";
import PopUp from "./popUp/popUp";
import { useState } from "react";

export default function Navbar() {
	const navLinkActive = ({ isActive }: { isActive: boolean }
	) => isActive ? "navlink-active" : "";
	return (
		<nav id='navbar'>
			<div className='navbar-left'>
				<NavLink to='/' className='navbar-logo-link'>
					<img src="/assets/gclogo.png" alt='GC Logo' />
					<div>
						<h1>SHAURYA</h1>
						<span>The Sports Committee</span>
					</div>
				</NavLink>
			</div>
			<NavRight navLinkActive={navLinkActive} />
			<Hamburger navLinkActive={navLinkActive} />
		</nav>
	)
}


interface NavRightProps {
	navLinkActive: ({ isActive }: { isActive: boolean }) => string;
	className?: string;
	children?: React.ReactNode;
}
const NavRight = ({ navLinkActive, className: cn = "navbar-right" }: NavRightProps) => {
	return (
		<div className={cn}>
			<NavLink to='/' className={navLinkActive}>Home</NavLink>
			<NavLink to='/sports' className={navLinkActive}>Sports</NavLink>
			<NavLink to='/rank' className={navLinkActive}>Overall Rank</NavLink>
			<NavLink to='/players' className={navLinkActive}>Best Players</NavLink>
			{/* <NavLink to='/rulebook' className={navLinkActive}>Rulebook</NavLink> */}
		</div>
	)
}


interface HamburgerProps {
	navLinkActive: ({ isActive }: { isActive: boolean }) => string;
}
const Hamburger = ({ navLinkActive }: HamburgerProps) => {
	const [hamState, setHamState] = useState(false);
	const handleHamClick = () => {
		setHamState(!hamState);
	}
	const handleHamClose = () => {
		setHamState(false);
	}
	return (
		<div id="hamburger-menu">
			<button onClick={handleHamClick}>
				|||
			</button>
			<PopUp open={hamState} onClose={handleHamClose} className="hamburger-menu-card">
				<button className="close">✕</button>
				<NavRight navLinkActive={navLinkActive} className="hamburger-menu-content" />
			</PopUp>
		</div>
	)
}