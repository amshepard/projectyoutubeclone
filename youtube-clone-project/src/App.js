import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Error404 from "./components/errors/Errors";
import Home from "./components/home/SearchBar";
import VideosIndex from "./components/videosIndex/VideosIndex";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="*" element={<Error404 />} />
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/videos/:id" Component={VideosIndex} />
			</Routes>
		</Router>
	);
}

export default App;