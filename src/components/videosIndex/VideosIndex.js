import { useEffect, useState } from "react";
import "./VideosIndex.css";

export async function VideosList(searchTerm, results) {
  const BASE_URL = "https://api.example.com/videos";
  const KEY = "YOUR_API_KEY";

  const response = await fetch(
    `${BASE_URL}?q=${searchTerm}&part=snippet&maxResults=${results}&key=${KEY}`
  );
  const data = await response.json();
  return data;
}

const VideoIndex = ({ searchTerm }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const data = await VideosList(searchTerm, 10);
        setVideos(data.items);
      } catch (error) {
        console.log("Error fetching videos:", error);
      }
    }

    fetchVideos();
  }, [searchTerm]);

  const handleClick = (video) => {
    // Handle the click event for a singular video
    console.log("Clicked video:", video);
  };

  const renderVideos = () => {
    return videos.map((video) => (
        <div className="video" key={video.id} onClick={() => handleClick(video)}>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          <h3>{video.snippet.title}</h3>
        </div>
      ));
  };

  return <div className="video-index">{renderVideos()}</div>;
};

export default VideoIndex;
