import * as FaIcons from "react-icons/fa"
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = ({ showSidebar, sidebar }) => {
    return (
        <>
            <nav className="navbar">
                {!sidebar && <Link to="#" className="menu-bars">
                    <FaIcons.FaBars color="#fff" onClick={showSidebar} />
                </Link>}
                <div className="ml-auto mr-4">
                    <Link className="mr-2" to="/contact">Contact</Link>
                    <Link className="mr-2" to="/about">About</Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;