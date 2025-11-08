import { useState } from "react";
import { addProduct } from "../Api/ProductApi";

export default function ProductForm({ onAdd }) {
  const [form, setForm] = useState({ title: "", price: "", category: "", image: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.price) return alert("Title & Price are required");

    const newProduct = await addProduct(form);
    onAdd(newProduct);
    setForm({ title: "", price: "", category: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input name="title" placeholder="Product Title" value={form.title} onChange={handleChange} />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
}
