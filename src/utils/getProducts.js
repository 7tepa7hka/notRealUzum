import extraProducts from "../data/extraProducts.json";

export async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const apiProducts = await res.json();
  return [...apiProducts, ...extraProducts];
}
