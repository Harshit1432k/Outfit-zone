import "../css/Category.scss";
import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </>
  );
};

export default Category;
