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
				{videoResults.map((video) => {
					return (
						<Video
							thumbnail={video.snippet.thumbnails.medium.url}
							title={video.snippet.title}></Video>
					);
				})}
			</div>
		</MainLayout>
	);
}

export default Home;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "kTVBaVHvR-05ftbhBKmNIdR2AnA",
//     "nextPageToken": "CAEQAA",
//     "regionCode": "CO",
//     "pageInfo": {
//         "totalResults": 1000000,
//         "resultsPerPage": 1
//     },
//     "items": [
//         {
//             "kind": "youtube#searchResult",
//             "etag": "4emrzmgTajyhWL0QhDabmjOIDMs",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "nlXqp3FVrq8"
//             },
//             "snippet": {
//                 "publishedAt": "2019-11-01T04:00:10Z",
//                 "channelId": "UCeSCejKJS0W4LTptFuBYU0g",
//                 "title": "Dalex - Hola Remix ft. Lenny Tavárez, Chencho Corleone, Juhn &quot;El All Star&quot; (Video Lírico Oficial)",
//                 "description": "Escúchalo en Spotify: http://socialhive.us/sp_HolaRMX Escúchalo en Apple: http://socialhive.us/ap_HolaRMX Sencillo producido ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/nlXqp3FVrq8/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/nlXqp3FVrq8/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/nlXqp3FVrq8/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "Dalex",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2019-11-01T04:00:10Z"
//             }
//         }
//     ]
// }
