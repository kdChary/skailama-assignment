import React from 'react'

import './HomeBtn.css'

const HomeBtn = () => {
	return (
		<div className='homeBtn'>
			<button type='button'>
				<img src="/images/home.png" alt="home" />
				<h6>Back to Home</h6>
			</button>
		</div>
	)
}

export default HomeBtn