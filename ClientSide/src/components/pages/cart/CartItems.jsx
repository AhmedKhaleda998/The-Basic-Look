import React, { useEffect, useState } from "react";
import { getCart } from "../../../services/cart.service";
import { useNavigate } from "react-router-dom";
import { deleteCartItem ,updateCartProduct} from "../../../services/cart.service";
import CartProductCard from "./CartProductCard";

const CartItems = () => {
  // const { id, name, description, price, quantity } = item;
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState([]);
  const navigate = useNavigate(); 

  const getData = async () => {
    try {
      const data = await getCart();
      if (data && data.cart) {
        setProducts(data.cart);
        setTotal(data.totalPrice);
      }
    } catch (error) {
      console.error("Error occurred while retrieving products:", error);
    }
  };
  

  useEffect(() => {
    getData();
  }, []);

  const handleQuantityChange = async(productId,size, newQuantity) => {
    // Find the product in the cartProducts array and update its quantity
    const updatedCartProducts = products.map((product) => {
      if (product.product._id === productId) {
        return { ...product, quantity: newQuantity };
        
      }
      return product;
    });
    
    setProducts(updatedCartProducts);
    await updateCartProduct(productId,size,newQuantity);
      getData();
    
    
  };

  const handleRemove = async (productId, size) => {
    try {
      await deleteCartItem(productId, size);
  
      // Remove the product with the given productId from the cartProducts array
      const updatedCartProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedCartProducts);
      getData();

      
    } catch (error) {
      console.error("Error occurred while removing product:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Shopping Cart</h3>
      <div className="card border-white">
        <div className="card-header bg-white">
          <h5 className="text-end">Total: LE {total} EGP</h5>
        </div>
        {products.length>0 ?(<div className="card-body">
          {products.map((p) => (
            <CartProductCard key={p._id} product={p}
            handleQuantityChange={handleQuantityChange}
            handleRemove={handleRemove} />
          ))}
          
        </div>):(
          <>
          <span className="vh-100"><h3>No items in cart</h3></span>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItems;
