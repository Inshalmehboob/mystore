import React from "react";
import ProductCard from "../components/productcard";
import "./productpages.css";

const Child = () => {
  const products = [
    { id: 1, title: "Kids Shirt", price: 20, image: "/kids shirt.webp" },
    { id: 2, title: "Kids Shoes", price: 35, image: "/kids shoes.jfif" },
    { id: 3, title: "Kids Bag", price: 30, image: "/kids bag.jpg" },
    { id: 4, title: "Kids Toy Car", price: 15, image: "/kids toy.jfif" },
    { id: 5, title: "Kids Jacket", price: 40, image: "/kids jacket.jfif" },
    { id: 6, title: "Kids Cap", price: 10, image: "/kids cap.jfif" },
    { id: 7, title: "Kids Bottle", price: 12, image: "/kids bottle.jfif" },
    { id: 8, title: "Kids Watch", price: 18, image: "/kids watch.jfif" },
    { id: 9, title: "Kids Shorts", price: 22, image: "/kids short.jfif" },
    { id: 10, title: "Kids Socks", price: 5, image: "/kids socks.jfif" },
    { id: 11, title: "Kids Stuff Toy", price: 28, image: "/kids stuff toy.jpg" },
    { id: 12, title: "Kids Hoodie", price: 32, image: "/kids hoodie.webp" },
  ];

  return (
    <div className="products-container">
      <h1>Kids Collection</h1>

      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Child;
