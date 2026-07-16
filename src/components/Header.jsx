import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSearch } from "../context/SearchContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import "./Header.css";

function Header() {
  const { searchTerm, setSearchTerm } = useSearch();
  const { theme, toggleTheme } = useTheme();
  const { lang, changeLang, t } = useLanguage();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        Not Real <span>Uzum</span>
      </Link>

      <div className="header__search">
        <span className="header__search-icon">🔍</span>
        <input
          type="text"
          placeholder={t("search_placeholder")}
          className="header__search-input"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>

      <div className="header__actions">
        <select
          className="header__lang"
          value={lang}
          onChange={(e) => changeLang(e.target.value)}
        >
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
          <option value="en">EN</option>
        </select>

        <button className="header__theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <Link to="/cart" className="header__cart">
          🛒
          {totalItems > 0 && (
            <span className="header__cart-badge">{totalItems}</span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
