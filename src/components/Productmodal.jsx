import { useEffect } from "react";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import "./ProductModal.css";

function ProductModal({ product, onClose }) {
  const { addToCart } = useCart();
  const { t } = useLanguage();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Добавлено в корзину 🛒", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="product-modal__overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="product-modal__close" onClick={onClose}>
          ✕
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="product-modal__image"
        />

        <div className="product-modal__info">
          <span className="product-modal__category">{product.category}</span>
          <h2 className="product-modal__title">{product.title}</h2>

          <div className="product-modal__rating">
            <span>⭐</span>
            <span>{product.rating.rate}</span>
            <span className="product-modal__rating-count">
              ({product.rating.count} отзывов)
            </span>
          </div>

          <p className="product-modal__description">{product.description}</p>

          <p className="product-modal__price">
            {product.price.toLocaleString()} $
          </p>

          <button className="product-modal__cart-btn" onClick={handleAddToCart}>
            🛒 {t("add_to_cart")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
