import React, { useState } from 'react';
import { MdOutlineEdit, MdSearch } from 'react-icons/md';

import './Transcript.css';

const Transcript = () => {
	const [canEdit, setEditing] = useState(false);

	return (
		<div className="transcripts">
			<div className="header">
				<h1 className="title">Edit Transcript</h1>

				{canEdit && (
					<div className="editBtns">
						<button type="button" className="discard">
							Discard
						</button>
						<button type="button" className="save">
							Save & Exit
						</button>
					</div>
				)}
			</div>

			<div className="transcript">
				<div className="btnsCard">
					<button
						className="edit"
						type="button"
						onClick={() => setEditing(!canEdit)}>
						<MdOutlineEdit />
						Edit Mode
					</button>

					<button className="search" type="button">
						<MdSearch />
					</button>
				</div>

				<div className="textBox">
					<h5>Speaker</h5>
					<p>
						On the other hand, we denounce with righteous indignation and
						dislike men who are so beguiled and demoralized by the charms of
						pleasure of the moment, so blinded by desire, that they cannot
						foresee the pain and trouble that are bound to ensue; and equal
						blame belongs to those who fail in their duty through weakness of
						will, which is the same as saying through shrinking from toil and
						pain. These cases are perfectly simple and easy to distinguish.
						<br />
						<br />
						In a free hour, when our power of choice is untrammelled and when
						nothing prevents our being able to do what we like best, every
						pleasure is to be welcomed and every pain avoided. But in certain
						circumstances and owing to the claims of duty or the obligations of
						business it will frequently occur that pleasures have to be
						repudiated and annoyances accepted. The wise man therefore always
						holds in these matters to this principle of selection: he rejects
						pleasures to secure other greater pleasures, or else he endures
						pains
					</p>
				</div>
			</div>
		</div>
	);
};

export default Transcript;
