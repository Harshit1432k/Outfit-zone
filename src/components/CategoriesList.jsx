import React from "react";
import categories from "../data/categories";
import "../css/CategoriesList.scss";
import DirectoryItem from "./DirectoryItem";

const CategoriesList = () => {
  return (
    <div className="categories-container">
      {categories.map((category, id) => (
        <DirectoryItem {...category} key={id}></DirectoryItem>
      ))}
    </div>
  );
};

export default CategoriesList;
