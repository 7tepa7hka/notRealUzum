import { useLanguage } from "../context/LanguageContext.jsx";
import "./Footer.css";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer__columns">
        <div className="footer__col">
          <h4>О нас</h4>
          <p>Мы не настоящий Uzum</p>
          <p>Вакансии: разработчик, который умрет в CSS в 3 ночи</p>
        </div>
        <div className="footer__col">
          <h4>Для покупателей</h4>
          <p>Связаться с нами (не связывайтесь)</p>
          <p>Вопрос-ответ: да, это фейк</p>
        </div>
        <div className="footer__col">
          <h4>Для продавцов</h4>
          <p>Продавайте у нас (тут нет бэкенда)</p>
          <p>Кабинет продавца: coming never</p>
        </div>
        <div className="footer__col">
          <h4>Скачать приложение</h4>
          <p>📱 AppStore (не работает)</p>
          <p>🤖 Google Play (тоже не работает)</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Not Real Uzum. {t("footer_rights")}.</p>
        <p className="footer__joke">
          Сделано на React, и полном отсутствии сна ☕💜
        </p>
      </div>
    </footer>
  );
}

export default Footer;
