import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav>
        <h4>
            <Link to="/snacks">Snacks</Link>
        </h4>
        <button>
            <Link to="/snacks/new">New</Link>
        </button>
        <h4>
            <Link to="/">Home</Link>
        </h4>
    </nav>
  )
}

export default NavBar