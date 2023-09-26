import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import fb from "../../../data/facebook.png";
import ig from "../../../data/instagram.png";
import ln from "../../../data/linkedin.png";
import { gState } from "../../../context/Context";

const Footer = () => {
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
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          {/* Follow us */}
          <div className="col-md-2 col-lg-2 col-xl-2">
            <h5>Follow us</h5>
            <br />
            <a
              href="https://www.facebook.com/Thebasiclook1"
              target="_blank"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              <img
                className="foot-icon m-1"
                src={fb}
                alt="fb"
                style={{ height: "20px", width: "20px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/thebasiclookofficial/"
              target="_blank"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              <img
                className="foot-icon m-1"
                src={ig}
                alt="insta"
                style={{ height: "20px", width: "20px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/90901397/admin/"
              target="_blank"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              <img
                className="foot-icon m-1"
                src={ln}
                alt="insta"
                style={{ height: "20px", width: "20px" }}
              />
            </a>
          </div>
          {/* Useful Links */}
          <div className="col-md-2 col-lg-2 col-xl-2">
            <h5>Useful Links</h5>
            <br />
            <div>
              <p>
                <NavLink
                  to={"/"}
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </NavLink>
              </p>
              <p>
                <NavLink
                  to={"/contact"}
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </NavLink>
              </p>
              <p>
                <NavLink
                  href="#searchTerm"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                  onClick={() => setProductCollection("all")}
                >
                  Shop
                </NavLink>
              </p>
            </div>
          </div>
          {/* Shop */}
          <div className="col-md-2 col-lg-2 col-xl-2">
            <h5>Shop</h5>
            <br />
            <div>
              <p>
                <NavLink
                  to={"/shop"}
                  className="text-white"
                  style={{ textDecoration: "none" }}
                  onClick={() => setProductCollection("masculine")}
                >
                  Men
                </NavLink>
              </p>
              <p>
                <NavLink
                  to={"/shop"}
                  className="text-white"
                  style={{ textDecoration: "none" }}
                  onClick={() => setProductCollection("feminine")}
                >
                  Women
                </NavLink>
              </p>
            </div>
          </div>
          {/* Store Policies */}
          <div className="col-md-2 col-lg-2 col-xl-2">
            <h5>Store Policies</h5>
            <br />
            <div>
              <p>
                <NavLink
                  to={"/shipping"}
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Shipping &amp; Delivery
                </NavLink>
              </p>
              <p>
                <NavLink
                  to={"/refund"}
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Exchange &amp; Refund Policy
                </NavLink>
              </p>
              <p>
                <NavLink
                  to={"/privacypolicy"}
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Privacy Policy
                </NavLink>
              </p>
              <p>
                <NavLink
                  to={"/termsofservices"}
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Terms of Service
                </NavLink>
              </p>
              <p>
                <NavLink
                  to={"/sizechart"}
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Size Chart
                </NavLink>
              </p>
            </div>
          </div>
          {/* Subscribe */}
          <div className="col-md-4 col-lg-4 col-xl-4">
            <h5>Subscribe</h5>
            <br />
            <p>Sign up to get the latest on sales, new releases and more…</p>
            <div className="form-floating d-flex justify-content-center align-items-center">
              <input
                className="form-control"
                style={{
                  width: "300px",
                  background: "transparent",
                  color: "white",
                }}
                type="email"
                name="email"
                id="footerEmail"
                autoComplete="subscribe-email"
                placeholder="email"
                required
              />
              <button
                className="btn btn-light text-light bg-transparent m-2"
                style={{ height: "57px", width: "100px" }}
              >
                SIGN-UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
