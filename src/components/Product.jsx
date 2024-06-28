import React from "react";
import { Link } from "react-router-dom";

function Product({ title, id, description, brand, thumbnail }) {
  return (
    <Link
      to={`./singleProduct/${id}`}
      className="flex flex-col items-center justify-center w-full h-full bg-white rounded-lg shadow-md p-4"
    >
      <h3>Title: {title}</h3>
      <h3>Brand: {brand}</h3>
      <img src={thumbnail} alt="" />
      <h5>{description}</h5>
      <br />
      <hr />
      <br />
    </Link>
  );
}

export default Product;
