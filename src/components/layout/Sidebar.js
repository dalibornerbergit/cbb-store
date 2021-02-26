import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../router/Routes";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Button } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import "./Navbar.css";
import { GlobalContext } from "../../contexts/GlobalContext";
import MenuItems from "../../router/MenuItems";

const Sidebar = ({ sidebar, showSidebar }) => {
  const [lang, setLang] = useState("");
  const [languages, setLanguages] = useState([
    { value: "en", label: "Eglenski" },
    { value: "hr", label: "Rvacki" },
  ]);
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { width, isScreenMobile } = useContext(GlobalContext);

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setLang(event.target.value);
  };

  useEffect(() => {
    setLang(localStorage.getItem("i18nextLng"));
  }, []);

  return (
    <div
      className={
        (sidebar ? "nav-menu active" : "nav-menu") +
        (width < 620 ? " mobile" : "")
      }
    >
      <ul className="nav-menu-items">
        <li className="navbar-toggle">
          <Link to="#" className="sidebar-closer">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </Link>
        </li>
        <li className="d-flex justify-content-center p-2">
          {isScreenMobile && (
            <Button onClick={toggleTheme}>
              {isDark ? "Kršćaniziraj" : "Islamiziraj"}
            </Button>
          )}
        </li>

        <MenuItems isMobile={isScreenMobile} />
        {/* {Routes.map((route, index) => {
          return (
            route.sidebar &&
            width < 620 &&
            route.onlyMobile && (
              <li key={index} className={route.cName}>
                <Link to={route.path}>
                  {route.icon}
                  <span>{route.title}</span>
                </Link>
              </li>
            )
          );
        })}
        {Routes.map((route, index) => {
          return (
            route.sidebar &&
            !route.onlyMobile && (
              <li key={index} className={route.cName}>
                <Link to={route.path}>
                  {route.icon}
                  <span>{route.title}</span>
                </Link>
              </li>
            )
          );
        })} */}
      </ul>
    </div>
  );
};

export default Sidebar;
