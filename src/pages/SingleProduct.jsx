import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((data) => data.json())
      .then((product) => setProduct(product))
      .catch((error) => console.log(error.message));
  }, []);
  console.log(product);
  return (
    <>
      {product && (
        <div className="p-10">
          <div className="flex  gap-4  relative">
            <img
              src={product.thumbnail}
              alt={product.title}
              width={600}
              height={600}
            />
            <div className="flex flex-col align-center justify-center gap-4 px-3 py-3">
              <h1 className=" text-5xl">{product.title}</h1>
              <p className="text-4xl">Brand: {product.brand}</p>
              <p className="">Shipping: {product.shippingInformation}</p>
              <p className="text-2xl">Price: {product.price}</p>
              <button className="btn btn-outline btn-primary w-60">
                Add To Cart
              </button>
            </div>
            <div className="absolute top-16 left-16 z-50 bg-orange-500 text-gray-50 px-2 rounded-lg">
              {product.discountPercentage}%
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
