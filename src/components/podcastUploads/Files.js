import React from 'react';

import './Files.css';

const Files = () => {
	return (
		<div className="uploadsSection">
			<div className="widgetBanner">
				<h6 className="bannerText">
					All files are processed! Your widget is ready to go!
				</h6>
				<button className="bannerBtn">Try it out!</button>
			</div>
			<div className="tableWrapper">
				<table className="uploadedFiles">
					<thead>
						<tr className="headRow">
							<th>Name</th>
							<th>Upload Date & Time</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>

					<tbody>
						<tr className="eachFile">
							<td>Sample Name</td>
							<td>{new Date().getFullYear()}</td>
							<td>Done</td>
							<td>
								<button className="edit">Edit</button>
								<button className="delete">Delete</button>
							</td>
						</tr>
						<tr className="eachFile">
							<td>Sample Name</td>
							<td>{new Date().getFullYear()}</td>
							<td>Done</td>
							<td>
								<button className="edit">Edit</button>
								<button className="delete">Delete</button>
							</td>
						</tr>
						<tr className="eachFile">
							<td>Sample Name</td>
							<td>{new Date().getFullYear()}</td>
							<td>Done</td>
							<td>
								<button className="edit">Edit</button>
								<button className="delete">Delete</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Files;
