import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItems from "./CartItems";
import { goToPayment } from "../../../services/cart.service";
import { gState } from "../../../context/Context";
const Cart = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const { setData } = useContext(gState);

  const handleGotoPayment = async (e) => {
    try {
      e.preventDefault();
      const id = await goToPayment();

      await setData((prevState) => {
        return {
          ...prevState,
          sessionId: id.sessionId,
        };
      });
      navigate("/checkout");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {isLoggedIn ? (
        <>
          <CartItems />
          <div className="d-flex justify-content-center"><button
            className="btn btn-dark"
            onClick={(e) => handleGotoPayment(e)}
          >
            Go to payment
          </button></div>
          
        </>
      ) : (
        <>
          <h3 className="text-center text-danger fw-bold vh-100">
            LOGIN FIRST
          </h3>
        </>
      )}
    </>
  );
};

export default Cart;
