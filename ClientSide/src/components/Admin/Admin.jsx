import React, { useState, useEffect } from "react";
import Item from "./NewItem";
import { useNavigate } from "react-router-dom";
import { getProducts, deleteProductById } from "../../services/product.service";

const Admin = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const isLoading = sessionStorage.getItem("loading") === "true";
  const getData = async () => {
    try {
      const data = await getProducts();
      if (data && data.products) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error("Error occurred while retrieving products:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    await deleteProductById(id);
    getData();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col m-5 ">
          <header>
            <h3 className="text-center">Products</h3>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-dark"
                onClick={() => navigate("/adminAdd")}
              >
                Add New Product
              </button>
              <button
                className="btn btn-dark"
                onClick={() => navigate("/allOrders")}
              >
                View All Orders
              </button>
            </div>
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
          <Item key={p._id} product={p} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Admin;
