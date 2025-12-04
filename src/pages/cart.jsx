import React, { useContext } from "react";
import { CartContext } from "../context/cartcontext";
import { OrderContext } from "../context/ordercontext";

const Cart = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);

  const placeOrder = () => {
    if (cart.length === 0) return alert("Your cart is empty!");

    const buyerName = prompt("Enter your name to confirm order:");
    const order = {
      buyer: buyerName || "Guest User",
      products: cart,
      total,
      date: new Date().toLocaleString(),
    };
    addOrder(order);
    clearCart();
    alert("✅ Order placed successfully!");
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
