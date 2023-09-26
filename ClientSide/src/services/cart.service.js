import axios from "axios";

export const getCart = async () => {
  console.log("get products running");
  localStorage.setItem("loading", "true");
  try {
    let authToken = localStorage.getItem("authToken");
    const axiosResponse = await axios.get(
      "https://chicwardrobe-znz5.onrender.com/cart",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken,
        },
      }
    );
    const products = axiosResponse.data;
    localStorage.setItem("loading", "false");
    console.log("Get Products Finished");
    console.log(products);
    return products;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCartItem = async (id, size) => {
  console.log("Deleting item:", id);

  try {
    const authToken = localStorage.getItem("authToken");
    console.log(authToken);
    console.log(id);
    console.log(size);

    const response = await axios.delete(
      `https://chicwardrobe-znz5.onrender.com/cart/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        data: {
          size: size,
        },
      }
    );

    console.log("Item deleted successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};

export const addProductToCart = async (id, size, quantity) => {
  console.log("Adding item:", id);

  try {
    const authToken = localStorage.getItem("authToken");
    console.log(authToken);
    console.log(id);
    console.log(size);
    console.log(quantity);

    const response = await axios.post(
      `https://chicwardrobe-znz5.onrender.com/cart/${id}`,
      {
        size: size,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    console.log("Item Added successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error Adding item:", error);
    throw error;
  }
};

export const updateCartProduct = async (id, size, quantity) => {
  console.log("Updating item:", id);

  try {
    const authToken = localStorage.getItem("authToken");
    console.log(authToken);
    console.log(id);
    console.log(size);
    console.log(quantity);

    const response = await axios.put(
      `https://chicwardrobe-znz5.onrender.com/cart/${id}`,
      {
        size: size,
        quantity: quantity,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    console.log("Item Updated successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error Updating item:", error);
    throw error;
  }
};

export const goToPayment =async () => {
  try {
    const authToken = localStorage.getItem("authToken");
    console.log("goToPayment...");
    const response =await axios.get(
      `https://chicwardrobe-znz5.onrender.com/orders/checkout`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
          
        },
      }
      
    );
    console.log("goToPayment successfully")
    localStorage.setItem("sessionId",response.data.sessionId)
    console.log(response.data.sessionId);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const checkout = async (sessionId) => {
  try {
    console.log(sessionId);
    const authToken = localStorage.getItem("authToken");
    console.log("Checking out...");

    const response = await axios.post(
      `https://chicwardrobe-znz5.onrender.com/orders`,
      { sessionId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    console.log("Payment placed successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    // throw error;
  }
};