import axios from "axios";

export const getAllOrders = async () => {
  try {
    let authToken = localStorage.getItem("authToken");
    console.log("get allOrders running");
    localStorage.setItem("loading", "true");
    const axiosResponse = await axios.get(
      "https://chicwardrobe-znz5.onrender.com/orders/all",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    const orders = axiosResponse.data;
    localStorage.setItem("loading", "false");
    console.log("Get all orders Finished");
    console.log(orders);
    return orders;
  } catch (error) {
    console.error(error);
    
  }
};

export const getCustomerOrders = async () => {
  try {
    let authToken = localStorage.getItem("authToken");
    console.log("get orders running");
    localStorage.setItem("loading", "true");
    const axiosResponse = await axios.get(
      "https://chicwardrobe-znz5.onrender.com/orders",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    const orders = axiosResponse.data;
    localStorage.setItem("loading", "false");
    console.log("Get orders Finished");
    console.log(orders);
    return orders;
  } catch (error) {
    console.error(error);
    
  }
};
