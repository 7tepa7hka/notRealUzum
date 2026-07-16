import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { localizeProduct } from "../utils/getProducts.js";
import "./ProductCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const localized = localizeProduct(product, lang);

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={localized.image}
        alt={localized.title}
        className="product-card__image"
      />
      <p className="product-card__title">{localized.title}</p>

      <div className="product-card__rating">
        <span>⭐</span>
        <span>{localized.rating.rate}</span>
        <span className="product-card__rating-count">
          ({localized.rating.count})
        </span>
      </div>

      <p className="product-card__price">
        {localized.price.toLocaleString()} $
      </p>
    </div>
  );
}

export default ProductCard;
