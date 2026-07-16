import { useLanguage } from "../context/LanguageContext.jsx";
import "./Footer.css";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer__columns">
        <div className="footer__col">
          <h4>{t("footer_about_title")}</h4>
          <p>{t("footer_about_1")}</p>
          <p>{t("footer_about_2")}</p>
        </div>
        <div className="footer__col">
          <h4>{t("footer_users_title")}</h4>
          <p>{t("footer_users_1")}</p>
          <p>{t("footer_users_2")}</p>
        </div>
        <div className="footer__col">
          <h4>{t("footer_sellers_title")}</h4>
          <p>{t("footer_sellers_1")}</p>
          <p>{t("footer_sellers_2")}</p>
        </div>
        <div className="footer__col">
          <h4>{t("footer_app_title")}</h4>
          <p>{t("footer_app_1")}</p>
          <p>{t("footer_app_2")}</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Not Real Uzum. {t("footer_rights")}.</p>
        <p className="footer__joke">{t("footer_joke")}</p>
      </div>
    </footer>
  );
}

export default Footer;
