import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import Shop from "./pages/shop.jsx";
import Cart from "./pages/cart.jsx";
import Admin from "./pages/admin.jsx";
import Men from "./pages/men.jsx";
import Women from "./pages/women.jsx";
import Child from "./pages/child.jsx";
import AdminLogin from "./pages/adminlogin.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import { AuthContext } from "./context/authcontext.jsx";

const App = () => {
  const { user, logout } = useContext(AuthContext);

  const AdminRoute = ({ children }) =>
    user?.role === "admin" ? children : <Navigate to="/admin-login" replace />;

  return (
    <>
      <Header user={user} onLogout={logout} />

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/child" element={<Child />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
