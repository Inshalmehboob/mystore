import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext.jsx";
import ProductCard from "../components/productcard";

const Home = () => {
  const { products } = useContext(ProductContext);

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Store 🛍️</h1>
          <p>Discover the latest deals and top products!</p>
          <button className="shop-now">Shop Now</button>
        </div>
      </section>

      <section className="featured-products">
        <h2 className="h2">Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
