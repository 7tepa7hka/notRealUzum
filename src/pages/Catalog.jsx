import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../utils/getProducts.js";
import "./Catalog.css";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  productCard;

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
        const uniqueCategories = [...new Set(data.map((p) => p.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Не удалось загрузить данные 🫤");
        setLoading(false);
      });
  }, []);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  if (loading) {
    return <p className="catalog__status">Загрузка...</p>;
  }

  return (
    <div className="catalog">
      <h1 className="catalog__title">Каталог</h1>

      <div className="catalog__filters">
        <button
          className={
            activeCategory === "all"
              ? "catalog__filter catalog__filter--active"
              : "catalog__filter"
          }
          onClick={() => setActiveCategory("all")}
        >
          Все
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={
              activeCategory === cat
                ? "catalog__filter catalog__filter--active"
                : "catalog__filter"
            }
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <p className="catalog__status">В этой категории пока пусто</p>
      ) : (
        <div className="catalog__grid">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Catalog;
