/** @format */
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import "./VideosIndex.css"

function VideosIndex(props) {
	const { id } = useParams();

	return (
		<MainLayout>
			<div className="content">
				<h1>ID: {id}</h1>
				<iframe
					title="video"
					className="video-embed"
					src="https://www.youtube.com/embed/dQw4w9WgXcQ"
					frameborder="0"
					allowfullscreen></iframe>
			</div>
		</MainLayout>
	);
}

export default VideosIndex;
