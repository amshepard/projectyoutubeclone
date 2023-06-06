
import MainLayout from "../layouts/MainLayout";
import "./Errors.css";
import errorImage from "../../assets/error404.png";

const Error404 = () => {
	return (
		<MainLayout>
			<div className="error-container">
				<h1>Error 404</h1>
				<p>Page not found</p>
				<img src={errorImage} alt="Error 404" className="error-image" />
			</div>
		</MainLayout>
	);
};

export default Error404;
