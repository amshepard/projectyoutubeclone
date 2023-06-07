/** @format */

import MainLayout from "../layouts/MainLayout.js";
import "./SearchBar.css";
import { useState } from "react";
import Video from "../videosIndex/Video";
import logo from "/Users/jnawlee/Desktop/Pursuit/Projects/youtube-clone-project/src/logo.svg";
import About from "../about/About.js";
import VideoIndex from "../videosIndex/VideosIndex.js";
import "./Home.css"

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
            onChange={handleChangeVideoNumbers}
          ></input>
          <input
            className="search-button"
            onClick={searchHandler}
            type="submit"
            value={"Search"}
          />
        </form>
      </div>
      {/* <section className="videos-container">
        {videoResults.map((video) => {
          return (
            <Video
              key={video.id.videoId}
              thumbnail={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
            ></Video>
          );
        })}
      </section> */}
      <VideoIndex videos={videoResults} searchTerm={search} />
    </div>
  );
}

export default Home;

// import MainLayout from '../layouts/MainLayout.js';

// import './SearchBar.css';
// import { useState } from 'react';
// import Video from '../videosIndex/Video';
// import VideoIndex from '../videosIndex/VideosIndex.js';

// function Home() {
//   const apiKey = process.env.REACT_APP_API_KEY;

//   const [search, setSearch] = useState('');
//   const [videoNumbers, setVideoNumbers] = useState(0);
//   const [videoResults, setVideoResults] = useState([]);

//   function searchHandler(e) {
//     e.preventDefault();
//     fetch(
//       `https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&q=${encodeURIComponent(
//         search
//       )}&part=snippet&maxResults=${videoNumbers}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setVideoResults(data.items);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   function handleChange(e) {
//     setSearch(e.target.value);
//   }

//   function handleChangeVideoNumbers(e) {
//     setVideoNumbers(e.target.value);
//   }

//   return (
//     <div className="home-section">
//       <div className="search-form">
//         <form onSubmit={searchHandler}>
//           <input
//             className="search-input"
//             value={search}
//             onChange={handleChange}
//             type="text"
//             placeholder="Search.."
//           />
//           <input
//             className="search-amount"
//             type="number"
//             value={videoNumbers}
//             onChange={handleChangeVideoNumbers}
//           ></input>
//           <input className="search-button" type="submit" value={'Search'} />
//         </form>
//       </div>
//       <VideoIndex searchTerm={search}/>
//     </div>
//   );
// }

// export default Home;

