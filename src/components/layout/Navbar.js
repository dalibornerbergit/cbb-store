import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = ({ showSidebar, sidebar }) => {
  const [lang, setLang] = useState("");
  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setLang(event.target.value);
  };

  useEffect(() => {
    setLang(localStorage.getItem("i18nextLng"));
  }, []);

  return (
    <>
      <nav className="navbar">
        {!sidebar && (
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars color="#fff" onClick={showSidebar} />
          </Link>
        )}
        <div className="ml-auto mr-4">
          <select className="rounded p-2 mx-2" onChange={handleChange}>
            <option value="en">Eglenski</option>
            <option value="hr">Rvacki</option>
          </select>
          <Link className="mx-2" to="/contact">
            Contact
          </Link>
          <Link className="mx-2" to="/about">
            About
          </Link>
          <span className="bg-primary p-2 mx-2 rounded">{lang}</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
