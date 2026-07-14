import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import "./Navbar.css";

function Navbar() {
  const { t } = useLanguage();
  const { totalItems } = useCart();

  const tabs = [
    { path: "/", label: t("nav_home") },
    { path: "/catalog", label: t("nav_catalog") },
    { path: "/about", label: t("nav_about") },
    { path: "/contacts", label: t("nav_contacts") },
    { path: "/cart", label: t("nav_cart"), badge: totalItems },
  ];

  return (
    <nav className="navbar">
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
          {tab.badge > 0 && <span className="navbar__badge">{tab.badge}</span>}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
