import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/product.service";
import { updateCartProduct ,addProductToCart} from "../../services/cart.service";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async (id) => {
    const product = await getProductById(id);
    setProduct(product);
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);
  const absPath = "https://chicwardrobe-znz5.onrender.com/";


// let quantity ;
//   const handleQuantitySelect = async(event) => {
//     const newQuantity = parseInt(event.target.value, 10);
//     quantity = newQuantity;
//     setProduct(updatedCartProducts);
//     await updateCartProduct(product._id,product.size[0],newQuantity);
//       getData();
//   };
  
  const handleAddToCart = async () => {
    try {
      await addProductToCart(product._id, product.size[1]);

    } catch (error) {
      console.error("Error occurred while adding item to cart:", error);
    }
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
    <div className="container">
      <div className="row">
        {product && (
          <>
            <div className="col-md-7 g-3">
              <img
                src={absPath + product.image}
                alt="product"
                className="man"
              />
            </div>
            <div className="col-md-5 g-3">
              <div>
                <h3>{product.name}</h3>
                <h5>{product.description}</h5>
                <h6>LE {product.price} EGP</h6>
                Color: Black
              </div>
              Size
              <div className="d-flex justify-content-start align-items-start">
                <button className="size-box" id="size-btn">
                  S
                </button>
                <button className="size-box" id="size-btn">
                  M
                </button>
                <button className="size-box" id="size-btn">
                  L
                </button>
              </div>
              <div className="row">
                {/*<div className="col-md-3">
                   <div className="input-group w-25 h-100">
                    <label htmlFor="quantityindetails">Quantity:</label>
                    <select
                      className="form-select"
                      
                      id="quantityindetails"
                      onChange={handleQuantitySelect}
                    >
                      {renderQuantityOptions()}
                    </select>
                  </div> 
                </div>*/}
                <div className="col-md-9">
                  <button
                    className="btn bg-black text-light m-1"
                    style={{ height: "50px", width: "50%" }}
                    id="send-butt"
                    type="submit"
                    onClick={()=> handleAddToCart()}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
              Share this:
              <div className="d-flex justify-content-start align-items-start">
                <img src="./data/facebook (1).png" alt="" />
                <img src="./data/facebook (1).png" alt="" />
                <img src="./data/facebook (1).png" alt="" />
                <img src="./data/facebook (1).png" alt="" />
              </div>
              <br />
              <p>The model is 1.86 m, wearing size L</p>
              <p>58% Cotton 42% Polyester Brushed</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
