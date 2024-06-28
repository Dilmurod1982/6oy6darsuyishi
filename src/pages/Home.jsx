import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

function Home() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((data) => data.json())
      .then((products) => setProducts(products))
      .catch((error) => console.log(error.message));
  }, []);
  return <>{products && <ProductList products={products} />}</>;
}

export default Home;
