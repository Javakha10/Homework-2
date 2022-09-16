import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Wrapper = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Wrapper;
