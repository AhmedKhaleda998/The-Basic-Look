import React, { useEffect, useState } from "react";
import { getCustomerOrders } from "../../../services/orders.service";
const OrderHistoryCard = () => {
  const [orders, setOrders] = useState([]);
  const getData = async () => {
    try {
      const data = await getCustomerOrders();

      setOrders(data.orders);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="card mb-3">
      <div className="card-header">Orders</div>
      <div className="card-body">
        <div>
          {orders.map((order) => (
            <div key={order._id}>
              <p></p>
              <p>ID: {order._id}</p>
              <p>Price: ${order.totalAmount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryCard;
