// fetch(
//     `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
//   );
//   const videos = await response.json();
//   return videos.items.map((video) => ({
//     id: video.id.videoId,
//     title: video.snippet.title,
//     thumbnail: video.snippet.thumbnails.default.url,
//     description: video.snippet.description,
//     channel: video.snippet.channelTitle,
//     channelId: video.snippet.channelId,
//     duration: video.contentDetails.duration,
//     }));

    // export const getVideos = async (query) => {
    //     const response = await fetch(
    //         `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${query}&type=video&part=snippet,contentDetails&maxResults=10`)
    //     }


        