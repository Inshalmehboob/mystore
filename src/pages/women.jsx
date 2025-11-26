import React from "react";
import ProductCard from "../components/productcard";
import "./productpages.css";

const Women = () => {
  const products = [
    { id: 1, title: "Women Dress", price: 45, image: "/womens clothes.webp" },
    { id: 2, title: "Women Shoes", price: 70, image: "/womens shoes.jpg" },
    { id: 3, title: "Women Bag", price: 55, image: "/womens bag.jpg" },
    { id: 4, title: "Women Hoodie", price: 60, image: "/womens hoodie.jpg" },
    { id: 5, title: "Women Watch", price: 80, image: "/womens watch.jpg" },
    { id: 6, title: "Women Jeans", price: 50, image: "/womens jeans.jfif" },
    { id: 7, title: "Girls Purse", price: 25, image: "/womens purse.jfif" },
    { id: 8, title: "Women Jacket", price: 90, image: "/womens jacket.webp" },
    { id: 9, title: "Women Sandals", price: 30, image: "/womens sandals.webp" },
    { id: 10, title: "Women Top", price: 35, image: "/womens top.jpg" },
    { id: 11, title: "Women Scarf", price: 15, image: "/womens scarf.webp" },
    { id: 12, title: "Women Perfume", price: 40, image: "/womens perfume.jfif" },
  ];

  return (
    <div className="products-container">
      <h1>Women Collection</h1>

      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Women;
