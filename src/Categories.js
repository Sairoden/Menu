import React from "react";

const Categories = ({ categories, handleFilterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          type="button"
          className="filter-btn"
          onClick={() => handleFilterItems(category)}
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
