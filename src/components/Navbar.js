import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import "./Navbar.css"
import { SidebarData } from "./SidebarData"
import { Link } from "react-router-dom";
import { useState } from "react";
import { IconContext } from "react-icons"

const Navbar = ({ showSidebar, sidebar }) => {
    return (
        <>
            <nav className="navbar">
                {!sidebar && <Link to="#" className="menu-bars">
                    <FaIcons.FaBars color="#fff" onClick={showSidebar} />
                </Link>}
            </nav>
        </>
    );
}

export default Navbar;