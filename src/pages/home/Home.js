import React from 'react';

import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import HomeBtn from '../../components/homeBtn/HomeBtn';

const Home = () => {
	return (
		<section className="verticalPage">
			<Navbar />
			<HomeBtn />
			<article className="content">
				<h1 className="title">Create a New Project</h1>
				<img src="/images/podcast.png" alt="home podcast" />

				<div className="textWrapper">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in
					</p>
				</div>

				<button type="button" className="createProjectCard">
					<img src="/images/plus.png" alt="add project" />
					<h2>Create New Project</h2>
				</button>
			</article>
		</section>
	);
};

export default Home;
