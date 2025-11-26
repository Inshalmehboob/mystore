import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const showToast = (message) => {
    const toast = document.createElement("div");
    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.padding = "12px 18px";
    toast.style.background = "#4CAF50";
    toast.style.color = "white";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 3px 10px rgba(0,0,0,0.3)";
    toast.style.fontSize = "15px";
    toast.style.zIndex = "9999";
    toast.style.opacity = "0";
    toast.style.transition = "all 0.4s ease";

    document.body.appendChild(toast);

    setTimeout(() => (toast.style.opacity = "1"), 50);
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => document.body.removeChild(toast), 400);
    }, 2000);
  };

 
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        showToast("Quantity increased!");
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      showToast("Product added to cart!");
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };


  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === id);

      if (existing.quantity > 1) {
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => setCart([]);


  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, total, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
