import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { addProductToCart } from "../../../services/cart.service";
const Product = ({ product }) => {
  const navigate = useNavigate(); 
  const absPath="https://chicwardrobe-znz5.onrender.com/";
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    try {
      await addProductToCart(product._id, product.size[1]);

      setQuantity(1);
    } catch (error) {
      console.error("Error occurred while adding item to cart:", error);
    }
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 gy-3">
      <div className="card gy-3">
        <a>
          <img
            src={absPath+product.image}
            alt="Product"
            className="card-img-top p-2"
            onClick={() => navigate(`details/${product._id}`)}
          /> 
        </a>
        <div className="card-body">
        <div className="card-title"><h4>{product.name}</h4></div>
          <div className="card-text">
            <a  style={{color: "black",textDecoration: "none"}}>
               {product.description}
            </a>
          </div>
          <div className="card-text">{product.price} EGP</div>
          <button className="btn btn-dark btn-sm mt-1" style={{width:"100%"}} onClick={()=>handleAddToCart()}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
