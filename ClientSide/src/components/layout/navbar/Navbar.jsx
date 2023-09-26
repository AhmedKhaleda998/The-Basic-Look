import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../data/logo.jpg";
import ShoopingCart from "../../../data/shopping-bag.png";
import profileIcon from "../../../data/icon.png";
import Search from "../../../data/search-interface-symbol.png";
import { gState } from "../../../context/Context";

const Navbar = () => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const navigate = useNavigate();
  const { setData } = useContext(gState);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const setProductCollection = async (coll) => {
    await setData((prevState) => {
      return {
        ...prevState,
        collection: coll,
      };
    });
    
    navigate("/products");
  };

  const handleSearchClick = () => {
    setSearchBarVisible(true);
  };

  const handleMainClick = () => {
    setSearchBarVisible(false);
  };

  const handleSearchButton = (e) => {
      e.preventDefault();
      navigate('/search');
  };
  const handleSearchInput = async(e) => {
    await setData((prevState) => {
      return {
        ...prevState,
        searchKeyword: e.target.value,

      };
    });
  };
  const logoMargin = isLoggedIn ? 8 : 10;

  return (
    <>
      <div className="free-delivery bg-dark border-1 p-3 text-center w-100">
        <p style={{ color: "aliceblue", fontSize: "80%" ,height: "3px"}}>
          FREE SHIPPING ON ALL ORDERS OVER 
          <span className="text-danger"> EGP1000</span>
        </p>
      </div>
      <nav className="navbar navbar-expand navbar-light">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-start"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <img
                  id="search"
                  src={Search}
                  alt="Search"
                  style={{ width: "100%", height: "30px" }}
                  onClick={handleSearchClick}
                />
              </li>
            </ul>
          </div>
          {!searchBarVisible && (
            <NavLink
              className="navbar-brand justify-content-center d-block"
              to="/home"
              style={{ marginLeft: `${logoMargin}%` }}
            >
              <img style={{ width: "80%" }} src={Logo} alt="Logo" />
            </NavLink>
          )}
          {searchBarVisible && (
            <div className="search-bar-overlay d-flex">
              <input
                className="form-control border-1 border-dark ms-2"
                style={{ width: "100%", height: "40px", background: "white" }}
                type="text"
                name="search-bar"
                placeholder="What're you looking for..."
                onChange={(e)=>handleSearchInput(e)}
                required
              />
              <button
                className="btn btn-dark p-1 btn-sm border-dark border-0 ms-1"
                style={{ width: "25%", height: "40px" }}
                onClick={(e)=>handleSearchButton(e)}
              >
                Search
              </button>
              <button
                type="button"
                className="m-2 btn-close btn-sm"
                aria-label="Close"
                onClick={handleMainClick}
              ></button>
            </div>
          )}

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ms-">
                    <NavLink className="nav-link" to="/cart">
                      <img
                        src={ShoopingCart}
                        alt="shopping-bag"
                        style={{ width: "25px", height: "25px" }}
                      />
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">
                      <img
                        src={profileIcon}
                        alt="acc"
                        style={{ width: "25px", height: "25px" }}
                      />
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand navbar-light">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex">
              <li className="nav-item">
                <NavLink className="nav-link text-black" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-black"
                  to="/products"
                  onClick={() => setProductCollection("all")}
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;