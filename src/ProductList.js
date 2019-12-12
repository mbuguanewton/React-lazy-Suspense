import React, { useState } from "react";

function ProductList() {
  const Products = [
    {
      id: 1,
      title: "Mac Book Pro"
    },
    {
      id: 2,
      title: "Dell XPS 15"
    },
    {
      id: 3,
      title: "Alienware M15"
    },
    {
      id: 4,
      title: "ASUS ROG Strix II"
    },
    {
      id: 5,
      title: "Lenovo Legion"
    }
  ];
  const [value, setValue] = useState(Products);
  return (
    <div>
      {value && value.length ? (
        <ul>
          {value.map(product => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      ) : (
        <p>No products</p>
      )}
    </div>
  );
}

export default ProductList;
