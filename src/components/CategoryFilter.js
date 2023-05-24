import React from "react";

function CategoryFilter({ categories, click }) {
  const catFilter = categories.map((category, index) => {
    return (
      <button key={index} className={category} onClick={() => click(category)}>
        {category}{" "}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catFilter}
    </div>
  );
}

export default CategoryFilter;
