import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllProducts, localizeProduct } from "../utils/getProducts.js";
import { useCart } from "../context/CartContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pressed, setPressed] = useState(false);
  const { addToCart } = useCart();
  const { lang, t } = useLanguage();

  useEffect(() => {
    getAllProducts().then((data) => {
      const found = data.find((p) => String(p.id) === id);
      setProduct(found || null);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p className="product-page__status">Загрузка...</p>;
  if (!product)
    return <p className="product-page__status">Товар не найден 🤷</p>;

  const localized = localizeProduct(product, lang);

  const handleOrder = () => {
    setPressed(true);
    addToCart(product);
    toast.success(t("order_toast"));

    setTimeout(() => {
      setPressed(false);
      navigate("/cart");
    }, 500);
  };

  return (
    <div className="product-page">
      <Link to="/catalog" className="product-page__back">
        {t("back_button")}
      </Link>

      <div className="product-page__content">
        <div className="product-page__image-box">
          <img
            src={localized.image}
            alt={localized.title}
            className="product-page__image"
          />
        </div>

        <div className="product-page__info">
          <span className="product-page__category">{localized.category}</span>
          <h1 className="product-page__title">{localized.title}</h1>

          <div className="product-page__rating">
            <span>⭐</span>
            <span>{localized.rating.rate}</span>
            <span className="product-page__rating-count">
              ({localized.rating.count} отзывов)
            </span>
          </div>

          <p className="product-page__description">{localized.description}</p>

          <div className="product-page__price-box">
            <p className="product-page__price">
              {localized.price.toLocaleString()} $
            </p>

            <button
              className={
                pressed
                  ? "product-page__order-btn product-page__order-btn--pressed"
                  : "product-page__order-btn"
              }
              onClick={handleOrder}
            >
              🛒 {t("order_now")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
