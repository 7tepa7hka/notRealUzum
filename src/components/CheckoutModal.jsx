import { useState } from "react";
import { toast } from "react-toastify";
import { useLanguage } from "../context/LanguageContext.jsx";
import "./CheckoutModal.css";

function CheckoutModal({ onClose, onSuccess }) {
  const [phone, setPhone] = useState("");
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim()) {
      toast.error("Введите номер телефона");
      return;
    }
    toast.success(t("checkout_toast"));
    onSuccess();
    onClose();
  };

  return (
    <div className="checkout-modal__overlay" onClick={onClose}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        <button className="checkout-modal__close" onClick={onClose}>
          ✕
        </button>
        <h2>{t("checkout_title")}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder={t("checkout_placeholder")}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="checkout-modal__input"
          />
          <button type="submit" className="checkout-modal__submit">
            {t("checkout_submit")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutModal;
