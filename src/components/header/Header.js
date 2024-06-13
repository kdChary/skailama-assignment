import React from 'react';
import { MdOutlineHome } from 'react-icons/md';
import { FaCaretDown, FaRegBell } from 'react-icons/fa';

import './Header.css'

const Header = () => {
	return (
		<div className="header">
			<div className="headerLeft">
				<MdOutlineHome className="icon" />
				<h4 className="path">
					<span>/</span>Account settings
				</h4>
			</div>

			<div className="headerRight">
				<span className="language">
					<FaCaretDown />
					EN
					<img
						src="https://img.icons8.com/?size=100&id=t3NE3BsOAQwq&format=png&color=000000"
						alt="England"
					/>
				</span>

				<FaRegBell className="bellIcon" />
			</div>
		</div>
	);
};

export default Header;
