import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <>
      <Route path="/" element={<Home />} />
    </>
  );
}

export default AppRoutes;