import React, { useState, useEffect,useContext } from "react";
import AddAddress from "./AddAddress";
import { getAddresses,getAddressById } from "../../../services/address.service";
import EditAddress from "./EditAddress";
import AddressCard from "./AddressCard";
import { gState } from "../../../context/Context";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const [addresses, setAddresses] = useState([]);
const navigate = useNavigate();
  const {data,setData} = useContext(gState);
  const {defaultAddressId} =data;
  const getData = async () => {
    try {
      const data = await getAddresses();
      setAddresses(data.addresses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  addresses.forEach(address =>{
    if(address.isDefault){
       setData((prevState) => {
        return {
          ...prevState,
          defaultAddressId: address._id,
        };
      });
    }
  });
  if(defaultAddressId === ''){
    if (addresses.length<1) {
      navigate('/address');
    }else{
      setData((prevState) => {
        return {
          ...prevState,
          defaultAddressId: addresses[0],
        };
      });
    }
  }

  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [addressId, setAddressId] = useState("");

  const getId = (id) => {
    setAddressId(id);
  };
  const editEnable = (bool) => {
    setIsEditEnabled(bool);
  };

  return (
    <main>
      <header>
        <h2>My Addresses</h2>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Addresses</h3>

            {addresses.map((address) => (
              <AddressCard
                key={address._id}
                address={address}
                editEnable={editEnable}
                getId={getId}
                getData={getData}
              />
            ))}
          </div>
          {!isEditEnabled ? (
            <AddAddress getData={getData} editEnable={editEnable} />
          ) : (
            <EditAddress
              id={addressId}
              getData={getData}
              editEnable={editEnable}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Address;
