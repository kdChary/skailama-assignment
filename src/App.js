import React from 'react';

// import Home from './pages/home/Home'
// import Profile from './pages/profile/Profile'
import Projects from './pages/projects/Projects';

/*
	* add cursor pointer in logo card
	* create a separate component for path
	* Do code clean-up in Side bar
	* Add routing.

	!# => Home
		* add popup for home.
		* add state.
	!# => Projects
		* create a page with
			-> navbar
			-> back btn
			-> div containing project components
		* functionality
			-> on clicking the back btn go to home.
			-> clicking on project should go to project.
			-> add animations to ul
	!# => next
*/

const App = () => {
	return (
		<div>
			<Projects />
		</div>
	);
};

export default App;
