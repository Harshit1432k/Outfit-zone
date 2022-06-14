import { Routes, Route } from "react-router-dom";
import "../css/Shop.scss";
import CategoriesPreview from "./CategoriesPreview";
import Category from "./Category";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
