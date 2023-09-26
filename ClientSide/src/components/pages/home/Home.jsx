import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import summer from "../../../data/summercoll.jpg";
import winter from "../../../data/wintercoll.jpg";
import formal from "../../../data/formalcoll.jpg";
import hoodie from "../../../data/hoodie22.webp";
import fast from "../../../data/delivery-van (2).png";
import customer from "../../../data/messenger.png";
import credit from "../../../data/credit-cards.png";
import transfer from "../../../data/transfer.png";
import { gState } from "../../../context/Context";

const Home = () => {
  const navigate = useNavigate();
  const { setData } = useContext(gState);
  const setProductCollection = async (coll) => {
    await setData((prevState) => {
      return {
        ...prevState,
        collection: coll,
      };
    });
    navigate("/products"); 
  };

  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 ">
            <div className="box men">
              <button
                className="button-6"
                onClick={() => setProductCollection("masculine")}
              >
                Men
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="box women">
              <button
                className="button-6"
                onClick={() => setProductCollection("feminine")}
              >
                Women
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 className="text-center p-2">Collections</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12">
            <div onClick={() => setProductCollection("summer")}>
              <img className="box2 " src={summer} alt="summer" />
              <h4
                className="text-center"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                <a className="ca" href="">
                  Summer Collection
                </a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12">
            <div onClick={() => setProductCollection("formal")}>
              <img
                className="box2 h-75"
                style={{ height: "450px" }}
                src={formal}
                alt="formalcoll"
              />
              <h4
                className="text-center"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                <a className="ca" href="">
                  Formal Collection
                </a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12">
            <div onClick={() => setProductCollection('winter')}>
              <img className="box2 " src={winter} alt="wintercoll" />
              <h4
                className="text-center"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                <a className="ca" href="">
                  Winter Collection
                </a>
              </h4>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col">
            <h4 className="p-2 text-center">All Products</h4>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-3 col-md-4 col-sm-6 col-9 g-3">
            <div className="card g-3 h-100">
              <img
                src={hoodie}
                alt="Product"
                className="card-img-top p-2 h-75"
              />
              <div className="card-body">
                <a href="shop.html">
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </a>
                <a href="shop.html">
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </a>
                <a href="shop.html">
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </a>
                <a href="shop.html">
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </a>

                <div className="card-text text-black">
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/products"}
                  >
                    Basic Hoodie - Men
                  </NavLink>
                </div>
                <div className="card-text">LE 350.00 EGP</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-9 g-3">
            <div className="card g-3 h-100">
              <img
                src={hoodie}
                alt="Product"
                className="card-img-top p-2 h-75"
              />
              <div className="card-body">
                <NavLink to={"/products"}>
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </NavLink>
                <NavLink to={"/products"}>
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </NavLink>
                <NavLink to={"/products"}>
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </NavLink>
                <NavLink to={"/products"}>
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </NavLink>

                <div className="card-text text-black">
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/products"}
                  >
                    Basic Hoodie - Men
                  </NavLink>
                </div>
                <div className="card-text">LE 350.00 EGP</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-9 g-3">
            <div className="card g-3 h-100">
              <img
                src={hoodie}
                alt="Product"
                className="card-img-top p-2 h-75"
              />
              <div className="card-body">
                <NavLink to={"/products"}>
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </NavLink>
                <NavLink to={"/products"}>
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </NavLink>
                <NavLink to={"/products"}>
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </NavLink>
                <NavLink to={"/products"}>
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </NavLink>

                <div className="card-text">
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/products"}
                  >
                    Basic Hoodie - Men
                  </NavLink>
                </div>
                <div className="card-text">LE 350.00 EGP</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-9 g-3">
            <div className="card g-3 h-100">
              <img
                src={hoodie}
                alt="Product"
                className="card-img-top p-2 h-75"
              />
              <div className="card-body">
                <NavLink to={"/products"}>
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </NavLink>
                <NavLink to={"/products"}>
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </NavLink>
                <NavLink to={"/products"}>
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </NavLink>
                <NavLink to={"/products"}>
                  <img src={hoodie} alt="Product" className="circle-icon" />
                </NavLink>

                <div className="card-text">
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/products"}
                  >
                    Basic Hoodie - Men
                  </NavLink>
                </div>
                <div className="card-text">LE 350.00 EGP</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center m-2">
            <button
              className="create-butt"
              onClick={() => setProductCollection("all")}
              id="sign-butt"
            >
              VIEW ALL
            </button>
          </div>
        </div>
      </div>

      <div className="bg-dark ">
        <div className="container">
          <div className="row">
            <div className="col-3 g-3">
              <img src={fast} alt="delivery-icon" className="p-3" />
              <div>
                <h6 className="text-light">FAST SHIPPING</h6>
                <p className="text-light">To Your Doorstep</p>
              </div>
            </div>
            <div className="col-3 g-3">
              <img src={customer} alt="delivery-icon" className=" p-3" />
              <div>
                <h6 className="text-light">CUSTOMER SUPPORT</h6>
                <p className="text-light">Quick Response & Efficient Support</p>
              </div>
            </div>
            <div className="col-3 g-3">
              <img src={transfer} alt="delivery-icon" className="p-3" />
              <div className="">
                <h6 className="text-light">HASSLE-FREE RETURNS</h6>
                <p className="text-light">Easy 14-Day Return Policy</p>
              </div>
            </div>
            <div className="col-3 g-3">
              <img src={credit} alt="delivery-icon" className="p-3" />
              <div>
                <h6 className="text-light">SECURE CHECKOUT</h6>
                <p className="text-light">SSL Payment or Cash on Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter">
        <h5 style={{ paddingTop: "50px ", textAlign: "center" }}>Newsletter</h5>
        <span className="d-flex justify-content-center align-items-center">
          Sign up to get the latest on sales, new releases and more …
        </span>
        <div
          className="form-floating d-flex justify-content-center align-items-center"
          style={{ background: "white" }}
        >
          <input
            className="form-control text-black text-dark border-dark"
            style={{
              width: "300px",
              background: "transparent",
              color: "aliceblue",
            }}
            type="email"
            name="email"
            id="newsEmail"
            autoComplete="news-email"
            placeholder="email"
            required
          />
          <button
            className="btn btn-light text-dark border-dark bg-transparent m-2"
            style={{ height: "57px", width: "100px" }}
          >
            SIGN-UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
