/** @format */

function Video(props) {
	return (
		<>
			<img src={props.thumbnail}></img>
			<p>{props.title}</p>
		</>
	);
}

export default Video;
