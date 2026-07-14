import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ProductCard from "../components/ProductCard.jsx";
import ProductModal from "../components/Productmodal.jsx";
import Banner from "../components/Banner.jsx";
import { useSearch } from "../context/SearchContext.jsx";
import { getAllProducts } from "../utils/getProducts.js";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { searchTerm } = useSearch();

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Не удалось загрузить товары 😢", {
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
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
            <ProductCard key={p.id} product={p} onClick={setSelectedProduct} />
          ))}
        </div>
      )}

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default Home;
