import React, { useEffect } from "react";
import { deleteCartItem } from "../../../services/cart.service";

const CartProductCard = ({ product, handleQuantityChange, handleRemove }) => {
  const absPath = "https://chicwardrobe-znz5.onrender.com/";

  const handleRemoveButton = (productID, size) => {
    handleRemove(productID, size);
  };

  let quantity = product.quantity;
  
  const handleQuantitySelect = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    handleQuantityChange(product.product._id, product.size, newQuantity);
  };

  const renderQuantityOptions = () => {
    const options = [];
    for (let i = 1; i <= 10; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={absPath + product.product.image} // Replace with the actual image URL
            alt="Product"
            className="img-fluid"
          />
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <h5 className="card-title">{product.product.description}</h5>
            <p className="card-text">Price: {product.product.price}</p>
            <div className="d-flex">
              <div className="input-group w-25 h-100">
                <select
                  className="form-select"
                  value={quantity}
                  onChange={handleQuantitySelect}
                >
                  {renderQuantityOptions()}
                </select>
              </div>
              <button
                className="btn btn-outline-danger ms-2"
                onClick={() =>
                  handleRemoveButton(product.product._id, product.size)
                }
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
