import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/productcontext.jsx";   
import { CartProvider } from "./context/cartcontext.jsx";
import { OrderProvider } from "./context/ordercontext.jsx";       
import { AuthProvider } from "./context/authcontext.jsx";   
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider> 
      <ProductProvider>
        <CartProvider>
          <OrderProvider>
            <App />
          </OrderProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>
);
