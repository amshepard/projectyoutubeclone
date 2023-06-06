import "./Video.css"

function Video(props) {
	return (
		<>
			<div className="video-thumbnail">
				<img src={props.thumbnail} alt=""></img>
				<p className="video-title">{props.title}</p>
			</div>
		</>
	);
}

export default Video;
