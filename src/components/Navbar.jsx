import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

	const [isActtive, setActive] = useState(false);

	const ToggleClass = () => {
		console.log('helo');
		return setActive(!isActtive);
	}

	return (
		<header className="Header">
			<section className="flexSectionNavbar">
				<a className="logo" href="#">
					Logo
				</a>
				<nav className={`menu ${isActtive ? 'active' : null}`} >
				<a className="Links" href="#">
					Home
				</a>
				<a className="Links" href="#">
					Services
				</a>
				<a className="Links" href="#">
					Products
				</a>
				<a className="Links" href="#">
					Contacts
				</a>
			</nav>
			<button className="btn-icons" onClick={ToggleClass}>
				<i className={`fa-solid ${isActtive ? 'fa-xmark' : 'fa-bars'}`}></i>
			</button>
		</section>
		</header >
	);
};

export default Navbar;
