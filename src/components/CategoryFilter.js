import React from "react";

function CategoryFilter() {
  // Sample categories, you can replace this with actual data from your application
  const categories = ["All", "Electronics", "Clothing", "Accessories"];

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button key={index}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
