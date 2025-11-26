import React from "react";
import ProductCard from "../components/productcard";

const Men = () => {
  const products = [
    { id: 1, title: "Men Shirt", price: 25, image: "/mens shirt.avif" },
    { id: 2, title: "Nike Shoes", price: 120, image: "/nike.jpeg" },
    { id: 3, title: "Puma Hoodie", price: 80, image: "/puma.jpeg" },
    { id: 4, title: "Mens Shoes", price: 60, image: "/mens shoes.jpg" },
    { id: 5, title: "Mens Bag", price: 40, image: "/mens bag.jfif" },
    { id: 6, title: "Apple Watch", price: 250, image: "/apple.jpeg" },
    { id: 7, title: "Adidas Shoes", price: 100, image: "/adiddas.jpeg" },
    { id: 8, title: "Purse", price: 45, image: "/mens purse.jpg" },
    { id: 9, title: "Trouser", price: 20, image: "/trouser.jfif" },
    { id: 10, title: "Locket", price: 35, image: "/locket.webp" },
    { id: 11, title: "under Wear", price: 30, image: "/underwear.jfif" },
    { id: 12, title: "Belt", price: 55, image: "/belt.jfif" },
  ];

  return (
    <div className="products-container">
      <h1>Men Collection</h1>

      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Men;
