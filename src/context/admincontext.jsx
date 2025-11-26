import React, { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const loginAdmin = (username, password) => {

    if (username === "admin" && password === "1234") {
      setIsAdminLoggedIn(true);
      alert("Admin logged in successfully!");
    } else {
      alert("Invalid admin credentials");
    }
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <AdminContext.Provider value={{ isAdminLoggedIn, loginAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
