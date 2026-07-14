import { toast } from "react-toastify";
import "./Contacts.css";

const TELEGRAM_LINK = "https://t.me/Ksa_038";

function Contacts() {
  const handleClick = () => {
    toast.info("Открываю Telegram...");
    window.open(TELEGRAM_LINK, "_blank");
  };

  return (
    <div className="contacts">
      <h1>Связаться со мной</h1>
      <p className="contacts__text">
        Если есть вопросы по проекту — пиши в Telegram
      </p>
      <button className="contacts__btn" onClick={handleClick}>
        ✈️ Написать в Telegram
      </button>
    </div>
  );
}

export default Contacts;
