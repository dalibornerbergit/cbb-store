import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../router/Routes";
import * as AiIcons from "react-icons/ai";
import "./Navbar.css";

const Sidebar = ({ sidebar, showSidebar }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div
      className={
        (sidebar ? "nav-menu active" : "nav-menu") +
        (width < breakpoint ? " mobile" : "")
      }
    >
      <ul className="nav-menu-items">
        <li className="navbar-toggle">
          <Link to="#" className="sidebar-closer">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </Link>
        </li>
        {Routes.map((route, index) => {
          return (
            route.sidebar && (
              <li key={index} className={route.cName}>
                <Link to={route.path}>
                  {route.icon}
                  <span>{route.title}</span>
                </Link>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
