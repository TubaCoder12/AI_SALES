import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  // jin routes par Navbar/Footer nahi chahiye
  const hideLayoutRoutes = ["/login", "/signup", "/forget-password"];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
};

export default Layout;
