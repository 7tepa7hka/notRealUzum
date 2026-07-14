import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      <main className="layout__content">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default Layout;
