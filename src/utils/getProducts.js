import extraProducts from "../data/extraProducts.json";
import { productTranslations } from "../data/productTranslations.js";

export async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const apiProducts = await res.json();
  return [...apiProducts, ...extraProducts];
}

export function localizeProduct(product, lang) {
  const translation = productTranslations[product.id]?.[lang];
  if (!translation) return product;
  return {
    ...product,
    title: translation.title,
    description: translation.description,
  };
}
