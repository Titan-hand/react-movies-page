import React from "react";
// Routers
import Routers from "./Components/Routers/Routers";

// components
import { ToastContainer } from "@carlosedua/react-toastify";

// Global Styles
import "./Components/Styles/styles.css";
import "./Components/Styles/Vendors/lazy-load-images.min.css";
import "@carlosedua/react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routers />
    </> 
  );
}

export default App;
