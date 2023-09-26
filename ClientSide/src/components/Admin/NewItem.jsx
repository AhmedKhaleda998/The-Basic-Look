import React, {  useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { gState } from "../../context/Context";

const NewProduct = ({ product, handleDelete }) => {
  const navigate = useNavigate();
  const absPath = "https://chicwardrobe-znz5.onrender.com/";
  const { setData } = useContext(gState);
  const handleEdit = async () => {
    await setData((prevState) => {
      return {
        ...prevState,
        adminEditForm: {
          id : product._id,
          name: product.name,
          price: product.price,
          size: product.size,
          description: product.description,
          gender: product.gender,
          collectionSeason: product.collectionSeason,
          image: null,
        },
      };
    });
    navigate("/adminEdit")
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 gy-3">
      <div className="card gy-3">
        <a>
          <img
            src={absPath + product.image}
            alt="Product"
            className="card-img-top p-2"
            
          />
        </a>
        <div className="card-body">
          <div className="card-title">
            <h4>{product.name}</h4>
          </div>
          <div className="card-text">
            <a style={{ color: "black", textDecoration: "none" }}>
              {product.description}
            </a>
          </div>
          <div className="card-text"> {product.price} EGP</div>

          <div className="d-flex justify-content-center">
            <button
              className="btn btn-warning btn-sm mt-1"
              style={{ width: "50%" }}
              onClick={() => handleEdit()}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm ms-1 mt-1"
              style={{ width: "50%" }}
              onClick={() => handleDelete(product._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
