import React from 'react';
import moment from 'moment';
import Navbar from '../../components/navbar/Navbar';
import HomeBtn from '../../components/homeBtn/HomeBtn';

import './Projects.css';

const dummyProjects = [
	{
		id: '1',
		name: 'projectOne',
		episodes: '4 Episodes',
		edited: new Date().getDate(),
	},
	{
		id: '2',
		name: 'projectOne',
		episodes: '4 Episodes',
		edited: new Date().getDate(),
	},
	{
		id: '3',
		name: 'projectOne',
		episodes: '4 Episodes',
		edited: new Date().getDate(),
	},
	{
		id: '4',
		name: 'projectOne',
		episodes: '4 Episodes',
		edited: new Date().getDate(),
	},
	{
		id: '10',
		name: 'projectOne',
		episodes: '4 Episodes',
		edited: new Date().getDate(),
	},
	{
		id: '5',
		name: 'projectOne',
		episodes: '4 Episodes',
		edited: new Date().getDate(),
	},
	{
		id: '6',
		name: 'projectOne',
		episodes: '4 Episodes',
		edited: new Date().getDate(),
	},
	{
		id: '7',
		name: 'projectOne',
		episodes: '4 Episodes',
		edited: new Date().getDate(),
	},
	{
		id: '8',
		name: 'projectOne',
		episodes: '4 Episodes',
		edited: new Date().getDate(),
	},
	{
		id: '9',
		name: 'projectOne',
		episodes: '4 Episodes',
		edited: new Date().getDate(),
	},
];

const colors = ['#7e22ce', '#f8a01d', '#6366f1', '#1e23e7', '#fe1070'];

const getColor = () => {
	const color = colors[Math.floor(Math.random() * colors.length)];
	return color;
};

const Projects = () => {
	// const color = getColor();
	// console.log(color);
	return (
		<section className="verticalPage">
			<Navbar />
			<HomeBtn />
			<article className="content">
				<div className="header">
					<span className="left">
						<h1>Projects</h1>
					</span>

					<button type="button" className="createProjectBtn">
						<img src="/images/plus.png" alt="add project" />
						{/* <p></p> className="title" */}
						Create New Project
					</button>
				</div>
				<ul className="projects">
					{dummyProjects.map((item) => (
						<li className="eachProject" key={item.id}>
							<span
								style={{
									background: `${getColor()}`,
								}}
								className="projectDp">
								SP
							</span>

							<div className="projectData">
								<h5 className="projectName">
									Sample Project
									<span className="episodes">4 Episodes</span>
								</h5>

								<p className="editedTime">
									Last edited {moment(new Date()).fromNow()}
								</p>
							</div>
						</li>
					))}
				</ul>
			</article>
		</section>
	);
};

export default Projects;
