import React from 'react';
import { MdSettings } from 'react-icons/md';

import './Sidebar.css';

const Sidebar = () => {
	return (
		<aside>
			<div className="top">
				<div className="logoCard">
					<img
						src="https://res.cloudinary.com/dgga8cymk/image/upload/v1717775620/skailama/lama.-logo.png"
						alt="logo"
					/>
					<span>LAMA.</span>
				</div>

				<h5 className="projectName">sample Project</h5>

				<ul className="navOptions">
					<a href="/">
						<li className="options">
							<span className="circle">1</span>Projects
						</li>
					</a>

					<a href="/">
						<li className="options">
							<span className="circle">2</span>Widget Configurations
						</li>
					</a>

					<a href="/">
						<li className="options">
							<span className="circle">3</span>Deployment
						</li>
					</a>

					<a href="/">
						<li className="options">
							<span className="circle">4</span>Pricing
						</li>
					</a>
				</ul>
				<hr className="line" />
			</div>

			<div className="bottom">
				<hr className="line" />
				<span className="settings">
					<div className="circle">
						<MdSettings className="icon" />
					</div>
					Settings
				</span>
			</div>
		</aside>
	);
};

export default Sidebar;
