import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
// import Recipe from "./pages/Recipe";

function AppRoutes() {
  return (
    <>
      <Route path="/" element={<Home />} />
      {/* <Route path="/Recipe/:id" element={<Recipe />} /> */}
    </>
  );
}

export default AppRoutes;