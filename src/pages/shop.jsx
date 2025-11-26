import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/productcard";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="shop">
      <h2 className="ap">All Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
