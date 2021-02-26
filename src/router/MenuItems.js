import { Link } from "react-router-dom";
import { Routes } from "./Routes";

const MenuItems = ({ isMobile }) => {
  return Routes.map((route, index) => {
    return !isMobile
      ? route.sidebar && route.onlyMobile === false && (
          <li key={index} className={route.cName}>
            <Link to={route.path}>
              {route.icon}
              <span>{route.title}</span>
            </Link>
          </li>
        )
      : route.sidebar && (
          <li key={index} className={route.cName}>
            <Link to={route.path}>
              {route.icon}
              <span>{route.title}</span>
            </Link>
          </li>
        );
  });
};

export default MenuItems;
