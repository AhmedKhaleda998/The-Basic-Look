import React, { useEffect, useState, useContext } from "react";
import Product from "../item/Product";
import {
  getProducts,
  getProductsByCollection,
} from "../../../services/product.service";
import { gState } from "../../../context/Context";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { data } = useContext(gState);
  const { collection } = data;

  const getData = async () => {
    try {
      

      let data;
      if (collection === "all") {
        data = await getProducts();
      } else {
        data = await getProductsByCollection(collection);
      }

      if (data && data.products) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error("Error occurred while retrieving products:", error);
    } 
  };

  useEffect(() => {
    getData();
  }, [collection]);

  const isLoading = sessionStorage.getItem("loading") === "true";
  return (
    <div className="container">
      <div className="row">
        <div className="col m-5 ">
          <header>
            <h3 className="text-center">Products</h3>
          </header>
        </div>
      </div>
      <div className="row" id="products">
        {isLoading && (
          <div className="d-flex justify-content-center align-items-center ">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {products.map((p) => (
          <Product key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
