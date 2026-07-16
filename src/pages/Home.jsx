import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ProductCard from "../components/ProductCard.jsx";
import Banner from "../components/Banner.jsx";
import { useSearch } from "../context/SearchContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { getAllProducts, localizeProduct } from "../utils/getProducts.js";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useSearch();
  const { lang } = useLanguage();

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Не удалось загрузить товары 😢");
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((p) => {
    const localized = localizeProduct(p, lang);
    return localized.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="home">
      <Banner />

      <h1 className="home__title">
        {searchTerm
          ? `Результаты по запросу "${searchTerm}"`
          : "Популярные товары"}
      </h1>

      {loading ? (
        <p className="home__status">Загрузка товаров...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="home__status">Ничего не найдено 🤷</p>
      ) : (
        <div className="home__grid">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
