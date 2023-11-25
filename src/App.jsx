import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
 

  return (
    <div className="bg-dark">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
