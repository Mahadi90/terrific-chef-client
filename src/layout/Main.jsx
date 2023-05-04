import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../providers/AuthProvider";

const Main = () => {
  
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
