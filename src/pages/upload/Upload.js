import React from 'react';

import './Upload.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import UploadComponent from '../../components/upload/UploadComponent'

const uploadTypes = [
	{ name: 'Youtube', url: '/images/youtube.png' },
	{
		name: 'Spotify',
		url: '/images/spotify.png',
	},
	{
		name: 'Rss Feed',
		url: '/images/rss.png',
	},
	{
		name: 'Upload Media or Text File',
		url: '/images/cloud_upload.png',
	},
];
const Upload = () => {
	return (
		<section className="page">
			<Sidebar />
			<div className="content">
				<Header />
				<h1 className="title">Upload</h1>
				<div className="uploadWrapper">
					<ul className="uploadingOptions">
						{uploadTypes.map((type) => (
							<UploadComponent  key={type.name} val={type}/>
						))}
					</ul>

					<p className="or">or</p>

					<div className="localUpload">
						<div className="cloudImg">
							<img src="/images/cloud_upload.png" alt="" />
						</div>

						<h5 className="uploadInstruction">
							Select a file or drag and drop here (Podcast Media or
							Transcription Text)
						</h5>

						<p className="uploadType">
							MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
						</p>

						<button>Select File</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Upload;
