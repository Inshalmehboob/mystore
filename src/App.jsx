import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Men from "./pages/men";
import Women from "./pages/women";
import Child from "./pages/child";
import AdminLogin from "./pages/AdminLogin";
import About from "./pages/about";
import Contact from "./pages/contact";
// Force Vercel rebuild
import { AuthContext } from "./context/authcontext";

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
