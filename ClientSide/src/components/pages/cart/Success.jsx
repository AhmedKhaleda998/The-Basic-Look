import React, { useContext, useEffect ,useState} from "react";
import { checkout } from "../../../services/cart.service";
import { gState } from "../../../context/Context";
import { getAddresses } from "../../../services/address.service";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const { data } = useContext(gState);
  const { defaultAddressId } = data;
  const  sessionId  = localStorage.getItem("sessionId");
  const navigate = useNavigate();
  console.log(sessionId);
  const [addresses, setAddresses] = useState([]);

  const getAddressesData = async () => {
    try {
      const data = await getAddresses();
      setAddresses(data.addresses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAddressesData();
  }, []);

  // const getData = async () => {
  //   try {
  //     console.log(sessionId);
  //     await checkout(sessionId);
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  if(defaultAddressId === ''){
    if (addresses.length<1) {
      navigate('/address');
    }
  }
  return (
    <div className="text-center text-success  fw-bold vh-100">
      <p>Your Order Placed Successfully</p>
      <button className="btn btn-dark " onClick={()=>navigate('/')}>Go To Home</button>
    </div>
  );
};

export default Success;
