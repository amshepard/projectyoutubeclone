/** @format */

import "./MainLayout.css";
import { Link } from "react-router-dom";

function MainLayout({ children }) {
	return (
		<>
			<header>
				<span className="title">Youtube</span>
				<ul className="nav-secction">
					<li>
						<Link className="nav-link" to={"/"}>
							Home
						</Link>
					</li>
					<li>
						<Link className="nav-link" to={"/"}>
							About
						</Link>
					</li>
				</ul>
			</header>

			<main>{children}</main>
		</>
	);
}

export default MainLayout;
