import { useEffect, useState } from "react";
import { getProducts } from "../Api/ProductApi";
import ProductForm from "../Componant/ProductForm";
import ProductList from "../Componant/ProductList";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="container">
      <h1>🛒 Product Dashboard</h1>
      <ProductForm onAdd={handleAddProduct} />
      <ProductList products={products} />
    </div>
  );
}
