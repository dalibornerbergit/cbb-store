import * as FaIcons from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Navbar = ({ showSidebar, sidebar }) => {
  const [lang, setLang] = useState("");
  const { t, i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
    setLang(lang);
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
          <Button className="mx-2" onClick={() => handleClick("hr")}>
            {t("Click")} RVACKI
          </Button>
          <Button className="mx-2" onClick={() => handleClick("en")}>
            {t("Click")} eglenski
          </Button>
          <Link className="mr-2" to="/contact">
            Contact
          </Link>
          <Link className="mr-2" to="/about">
            About
          </Link>
          <span className="bg-primary p-2 rounded">{lang}</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
