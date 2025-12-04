import React, { useContext } from "react";
import { CartContext } from "../context/cartcontext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);

    const toast = document.createElement("div");
    toast.innerText = "Product added to cart!";
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#333";
    toast.style.color = "#fff";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "6px";
    toast.style.zIndex = "9999";
    toast.style.transition = "0.3s";

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1500);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title || product.name} />

      <h3>{product.title || product.name}</h3>
      <p>${product.price}</p>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
