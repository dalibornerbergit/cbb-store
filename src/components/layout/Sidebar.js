import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
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
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
