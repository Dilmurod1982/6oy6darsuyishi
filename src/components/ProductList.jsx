import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.products.map((product) => {
        const { title, id, description, brand, thumbnail } = product;

        return (
          <Product
            key={id}
            title={title}
            description={description}
            brand={brand}
            thumbnail={thumbnail}
            id={id}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
