import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import OrderHistoryCard from "./OrderHistoryCard";
import {
  getAddressesById,
  getAddresses,
} from "../../../services/address.service";

const Profile = () => {
  const navigate = useNavigate();
  const handleSignout = async () => {
    localStorage.setItem("isLoggedIn", "false");
    await navigate("/login");
  };
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const [addresses, setAddress] = useState([]);
  const getData = async () => {
    try {
      const data = await getAddresses();
      setAddress(data.addresses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {isLoggedIn ? (
        <main>
          <header>
            <h2>My Account</h2>
          </header>
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-2">
                <h5>Order history</h5>
                <OrderHistoryCard />
              </div>
              <div className="col-md-2 justify-content-end">
                <h4>Default address</h4>
                <h5 id="profile-name">mohamed moharam</h5>

                {addresses.map((address) => (
                  <div key={address._id}>
                    <p>{address.addressLine}</p>
                    <p>{address.country}</p>
                    <p>{address.state}</p>
                    <p>{address.postalCode}</p>
                    <p>{address.city}</p>
                    <p>{address.phone}</p>
                  </div>
                ))}

                <NavLink className="link-dark" to={"/address"}>
                  View address
                </NavLink>
                <br />
                <button
                  className="btn btn-dark mt-1"
                  onClick={() => handleSignout()}
                >
                  SIGN-OUT
                </button>
              </div>
            </div>
          </div>
        </main>
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

export default Profile;
