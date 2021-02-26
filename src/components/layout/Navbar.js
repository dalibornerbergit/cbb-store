import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Navbar.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { GlobalContext } from "../../contexts/GlobalContext";

const Navbar = ({ showSidebar, sidebar }) => {
  const [lang, setLang] = useState("");
  const [languages, setLanguages] = useState([
    { value: "en", label: "Eglenski" },
    { value: "hr", label: "Rvacki" },
  ]);
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { width,isScreenMobile } = useContext(GlobalContext);

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
          {width > 620 && (
            <Button onClick={toggleTheme}>
              {isDark ? "Kršćaniziraj" : "Islamiziraj"}
            </Button>
          )}
          {lang && (
            <select
              defaultValue={lang}
              className="rounded p-2 mx-2"
              onChange={handleChange}
            >
              {languages.map((language) => (
                <option value={language.value} key={language.value}>
                  {language.label}
                </option>
              ))}
            </select>
          )}
          {width > 620 && (
            <Link className="mx-2" to="/contact">
              Contact
            </Link>
          )}
          {width > 620 && (
            <Link className="mx-2" to="/about">
              About
            </Link>
          )}
          <span className="bg-primary p-2 mx-2 rounded">{lang}</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
