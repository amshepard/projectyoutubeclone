/** @format */

import MainLayout from "../layouts/MainLayout";
import "./SearchBar.css";
import { useState } from "react";
import Video from "../videosIndex/Video";

function Home() {
	const apiKey = process.env.REACT_APP_API_KEY;

	let [search, switchVideo] = useState("");
	let [videoNumbers, videoSwitched] = useState(0);
	let [videoResults, videoShown] = useState([]);
	function searchHandler(e) {
		e.preventDefault();
		fetch(
			`https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&q=${encodeURIComponent(
				search
			)}&part=snippet&maxResults=${videoNumbers}`
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				videoShown(data.items);
			})
			.catch((error) => {
				console.error(error);
			});
	}
	function handleChange(e) {
		switchVideo(e.target.value);
	}
	function handleChangeVideoNumbers(e) {
		videoSwitched(e.target.value);
	}

	return (
		<MainLayout>
			<div className="home-section">
				<div className="search-form">
					<form>
						<input
							className="search-input"
							value={search}
							onChange={handleChange}
							type="text"
							placeholder="Search.."
						/>
						<input
							className="search-amount"
							type="number"
							value={videoNumbers}
							onChange={handleChangeVideoNumbers}></input>
						<input
							className="search-button"
							onClick={searchHandler}
							type="submit"
							value={"Search"}
						/>
					</form>
				</div>
				<section className="videos-container">
					{videoResults.map((video) => {
						return (
							<Video
								key={video.id.videoId}
								thumbnail={video.snippet.thumbnails.medium.url}
								title={video.snippet.title}></Video>
						);
					})}
				</section>
			</div>
		</MainLayout>
	);
}

export default Home;