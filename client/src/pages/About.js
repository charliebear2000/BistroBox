import React from "react";
// import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const About = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <div>
        <p>Welcome to Bistro Box! </p>
      </div>
      {/* <ProductList /> */}
      <Cart />
    </div>
  );
};
export default About;
