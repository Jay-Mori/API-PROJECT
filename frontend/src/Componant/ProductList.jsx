export default function ProductList({ products }) {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <div className="product-card" key={p._id}>
          <img src={p.image || "https://via.placeholder.com/150"} alt={p.title} />
          <h3>{p.title}</h3>
          <p>💰 ${p.price}</p>
          <p className="category">{p.category}</p>
        </div>
      ))}
    </div>
  );
}
