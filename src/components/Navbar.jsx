import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useCity } from "../context/CityContext.jsx";
import "./Navbar.css";

function Navbar() {
  const { t } = useLanguage();
  const { city, changeCity, cities } = useCity();

  const tabs = [
    { path: "/", label: t("nav_home") },
    { path: "/catalog", label: t("nav_catalog") },
    { path: "/about", label: t("nav_about") },
    { path: "/contacts", label: t("nav_contacts") },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__city">
        <span className="navbar__pin">📍</span>
        <select
          className="navbar__city-select"
          value={city}
          onChange={(e) => changeCity(e.target.value)}
          title={t("city_label")}
        >
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="navbar__links">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.path === "/"}
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
