import React from "react";
import CategoriesList from "../components/CategoriesList";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <CategoriesList></CategoriesList>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
