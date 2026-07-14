import "./ProductCard.css";

function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <img
        src={product.image}
        alt={product.title}
        className="product-card__image"
      />
      <p className="product-card__title">{product.title}</p>

      <div className="product-card__rating">
        <span>⭐</span>
        <span>{product.rating.rate}</span>
        <span className="product-card__rating-count">
          ({product.rating.count})
        </span>
      </div>

      <p className="product-card__price">{product.price.toLocaleString()} $</p>
    </div>
  );
}

export default ProductCard;
