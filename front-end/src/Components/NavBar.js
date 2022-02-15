import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
	return (
		<nav>
			<h4>
				<Link to="/snacks">Snacks</Link>
			</h4>
			<button>
				<Link to="/snacks/new">New Snack</Link>
			</button>
			<h4>
				<Link to="/">Home</Link>
			</h4>
		</nav>
	);
}

export default NavBar;
