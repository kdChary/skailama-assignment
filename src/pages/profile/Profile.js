import React from 'react';

import './Profile.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';

// const countries = {
// 	'EN':'https://flagicons.lipis.dev/flags/4x3/gb.svg',
// 	'US':'https://flagicons.lipis.dev/flags/4x3/us.svg',
// 	'IN':'https://flagicons.lipis.dev/flags/4x3/in.svg'
// }

const inputVal = [
	{ type: 'text', text: 'User Name', id: 'userName' },
	{ type: 'email', text: 'Email', id: 'userEmail' },
];

const Profile = () => {
	return (
		<section className="page">
			<Sidebar />
			<div className="content">
				<Header />

				<article className="profile">
					<h2 className="title">Account Settings</h2>

					<div className="user">
						<div className="userImg">
							<img
								src="https://res.cloudinary.com/dgga8cymk/image/upload/v1717818023/skailama/dummy_user.png"
								alt="profile pic"
							/>
						</div>

						<div className="userDetails">
							{inputVal.map((val) => (
								<label htmlFor={val.id} key={val.id}>
									{val.text}
									<input
										type={val.type}
										name={val.id}
										id={val.id}
										placeholder={val.text}
									/>
								</label>
							))}
						</div>
					</div>
				</article>

				<article className="banner">
					<h2 className="title">Subscriptions</h2>

					<div className="bannerCard">
						<p className="cardText">
							You are currently on the <span>Ques AI Basic Plan!</span>
						</p>
						<button>Upgrade</button>
					</div>

					<p className="cancel">Cancel Subscription</p>
				</article>
			</div>
		</section>
	);
};

export default Profile;
