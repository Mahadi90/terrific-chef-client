import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../providers/AuthProvider";

const Main = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center mt-12">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
