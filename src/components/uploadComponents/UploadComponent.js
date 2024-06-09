import React from 'react';

import './UploadComponent.css'

const UploadComponent = ({val}) => {
	return (
		<li className='uploadType'>
			<div className="imgCard">
				<img src={val.url} alt="youtube" />
			</div>
			<h3 className="instruction">Upload {val.name} Video</h3>
		</li>
	);
};

export default UploadComponent;
