import React, { useState, useContext } from "react";
import { AuthContext } from "../context/authcontext";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext); 

  const handleLogin = () => {
    if (password === "admin123") {

      const adminData = { name: "Admin", role: "admin" };
      localStorage.setItem("user", JSON.stringify(adminData));

      setUser(adminData); 

      navigate("/admin"); 
    } else {
      alert("Wrong admin password");
    }
  };

  return (
    <div style={{ maxWidth: "350px", margin: "80px auto", textAlign: "center" }}>
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter Admin Password"
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          marginTop: "20px",
        }}
      />
      <button
        onClick={handleLogin}
        style={{ width: "100%", padding: "10px", cursor: "pointer" }}
      >
        Login
      </button>
    </div>
  );
};

export default AdminLogin;
