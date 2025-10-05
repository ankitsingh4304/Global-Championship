import { NavLink } from "react-router-dom";
import "./navbar.scss";
import PopUp from "./popUp/popUp";
import { useState } from "react";

export default function Navbar() {
	const navLinkActive = ({ isActive }: { isActive: boolean }
	) => isActive ? "navlink-active" : "";
	
	const handleDownloadRulebook = () => {
		const link = document.createElement('a');
		link.href = '/pdfs/rulebook.pdf'; // Replace with your actual PDF path
		link.download = 'GC_Rulebook.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

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
			<NavRight navLinkActive={navLinkActive} onDownloadRulebook={handleDownloadRulebook} />
			<Hamburger navLinkActive={navLinkActive} onDownloadRulebook={handleDownloadRulebook} />
		</nav>
	)
}


interface NavRightProps {
	navLinkActive: ({ isActive }: { isActive: boolean }) => string;
	className?: string;
	children?: React.ReactNode;
	onDownloadRulebook: () => void;
}
const NavRight = ({ navLinkActive, className: cn = "navbar-right", onDownloadRulebook }: NavRightProps) => {
	return (
		<div className={cn}>
			<NavLink to='/' className={navLinkActive}>Home</NavLink>
			<NavLink to='/sports' className={navLinkActive}>Sports</NavLink>
			<NavLink to='/rank' className={navLinkActive}>Overall Rank</NavLink>
			<NavLink to='/players' className={navLinkActive}>Best Players</NavLink>
			<button className="rulebook-btn" onClick={onDownloadRulebook}>
				<span className="btn-icon"></span>
				Rulebook
			</button>
		</div>
	)
}


interface HamburgerProps {
	navLinkActive: ({ isActive }: { isActive: boolean }) => string;
	onDownloadRulebook: () => void;
}
const Hamburger = ({ navLinkActive, onDownloadRulebook }: HamburgerProps) => {
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
				<NavRight navLinkActive={navLinkActive} className="hamburger-menu-content" onDownloadRulebook={onDownloadRulebook} />
			</PopUp>
		</div>
	)
}