import React, { useContext } from "react";
import { checkout } from "../../../services/cart.service";
import { gState } from "../../../context/Context";
import CartItems from "./CartItems";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NY7b0LsdqxwRmtKhZgtqGLxX3r9P4L8EdILFIbuTBjYvelOlb0Nw3nmo5Nn3dDrnp0x3mZco0wwcbcaedrVjQ0z00Si2dDTbD"
);

const ProductDisplay = () => {
  const { data } = useContext(gState);
  const { defaultAddressId } = data;
  // const authToken = sessionStorage.getItem("authToken");
  const { sessionId } = data;
  console.log(sessionId);
  const handleCheckout = async (e) => {
    e.preventDefault();
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
    if (error) {
      console.error(error);
    }
    console.log(sessionId);
  };

  return (
    <section>
      <CartItems />
      <form method="post" className="d-flex justify-content-center">
        <button
          className="btn btn-dark"
          onClick={(e) => {
            handleCheckout(e);
          }}
        >
          Checkout
        </button>
      </form>
    </section>
  );
};

export default ProductDisplay;
