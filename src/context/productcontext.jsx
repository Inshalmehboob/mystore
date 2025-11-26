import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Nike Shoes", price: 120, category: "Shoes", image: "/nike.jpeg" },
    { id: 2, name: "Adidas Bag", price: 80, category: "Bags", image: "/adiddas.jpeg" },
    { id: 3, name: "Puma Hoodie", price: 100, category: "Clothing", image: "/puma.jpeg" },
    { id: 4, name: "Apple Watch", price: 250, category: "Gadgets", image: "/apple.jpeg" },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
