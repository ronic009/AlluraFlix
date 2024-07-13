import React from 'react';

function CategoryButton({ category }) {
  return (
    <button className="category-button">
      {category}
    </button>
  );
}

export default CategoryButton;