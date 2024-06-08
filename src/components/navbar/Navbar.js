import React from 'react'
import { BsBell, BsGear } from 'react-icons/bs';
// import { BsGear } from "react-icons/fa6";

import './Navbar.css';

const Navbar = () => {
	return (
		<nav>
			<div className="left">
				<img
					src="https://res.cloudinary.com/dgga8cymk/image/upload/v1717775620/skailama/lama.-logo.png"
					alt="logo"
				/>
				<span>LAMA.</span>
			</div>
			
			<div className="right">
				<BsGear className="icon spin" />

				<BsBell className="icon" />
			</div>
		</nav>
	);
};

export default Navbar