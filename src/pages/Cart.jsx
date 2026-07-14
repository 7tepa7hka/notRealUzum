import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import CheckoutModal from "../components/CheckoutModal.jsx";
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart, changeQuantity, totalPrice, clearCart } =
    useCart();
  const { t } = useLanguage();
  const [showCheckout, setShowCheckout] = useState(false);

  if (cartItems.length === 0) {
    return (
      <div className="cart cart--empty">
        <h1>{t("nav_cart")}</h1>
        <p>{t("cart_empty")} 🛒</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1 className="cart__title">{t("nav_cart")}</h1>

      <div className="cart__list">
        {cartItems.map((item) => (
          <div className="cart__item" key={item.id}>
            <img src={item.image} alt={item.title} className="cart__image" />
            <div className="cart__info">
              <p className="cart__item-title">{item.title}</p>
              <p className="cart__item-price">
                {item.price.toLocaleString()} $
              </p>
            </div>
            <div className="cart__quantity">
              <button onClick={() => changeQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => changeQuantity(item.id, 1)}>+</button>
            </div>
            <button
              className="cart__remove"
              onClick={() => removeFromCart(item.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart__footer">
        <p className="cart__total">Итого: {totalPrice.toLocaleString()} $</p>
        <button
          className="cart__checkout-btn"
          onClick={() => setShowCheckout(true)}
        >
          {t("cart_checkout")}
        </button>
      </div>

      {showCheckout && (
        <CheckoutModal
          onClose={() => setShowCheckout(false)}
          onSuccess={clearCart}
        />
      )}
    </div>
  );
}

export default Cart;
