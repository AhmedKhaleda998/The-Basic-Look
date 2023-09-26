import React, { useEffect,useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "../../services/auth.service";
import NotFound from "../pages/NotFound";

const Register = () => {
  const navigate = useNavigate();
  const formErrors = localStorage.getItem("RegisterErrorMessage");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (formErrors) {
      setShowError(true);

      const timeout = setTimeout(() => {
        setShowError(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [formErrors]);
  
  if (window.location.pathname !== "/register") {
    localStorage.setItem("RegisterErrorMessage","");
  }

  const handleRefresh = () => {
    localStorage.setItem("RegisterErrorMessage", "");
    console.log("Page is being refreshed");
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleRefresh);

    return () => {
      window.removeEventListener("beforeunload", handleRefresh);
    };
  }, []);
  const registerForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full name is required"), 
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: async (formValues) => {
      try {
        const data = await register(formValues);
        localStorage.setItem("RegisterErrorMessage", "");
        localStorage.setItem("LoginErrorMessage", "");
        navigate("/login");
      } catch (error) {
        console.error(error);
      }
    },
  });
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return (
    <>
      {!isLoggedIn ? (
        <div>
          <header>
            <h2 className="text-center">Create account</h2>
          </header>

          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-7">
                <form  onSubmit={registerForm.handleSubmit}>
                  <div className="row">
                   <span className="text-danger fw-bold text-center">
                   {showError && <>{formErrors}</>}
                    </span>
                    <div className="col-lg-12 col-12 g-2">
                      <div className="form-floating">
                        <input
                          className={`form-control border-1 border-dark bg-white ${
                            registerForm.touched.name &&
                            registerForm.errors.name
                              ? "is-invalid"
                              : ""
                          }`}
                          type="text"
                          name="name"
                          id="fullname"
                          placeholder="Full name"
                          onChange={registerForm.handleChange}
                          onBlur={registerForm.handleBlur}
                          value={registerForm.values.name}
                        />
                        <label htmlFor="fullname">Full name</label>
                        {registerForm.touched.name &&
                          registerForm.errors.name && (
                            <div className="invalid-feedback">
                              {registerForm.errors.name}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-12 g-2">
                      <div className="form-floating ">
                        <input
                          className={`form-control border-1 border-dark bg-white ${
                            registerForm.touched.email &&
                            registerForm.errors.email
                              ? "is-invalid"
                              : ""
                          }`}
                          type="email"
                          name="email"
                          id="registerEmail"
                          placeholder="Email"
                          onChange={registerForm.handleChange}
                          onBlur={registerForm.handleBlur}
                          value={registerForm.values.email}
                        />
                        <label htmlFor="registerEmail">Email</label>
                        {registerForm.touched.email &&
                          registerForm.errors.email && (
                            <div className="invalid-feedback">
                              {registerForm.errors.email}
                            </div>
                          )}
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 g-2">
                      <div className="form-floating ">
                        <input
                          className={`form-control border-1 border-dark bg-white ${
                            registerForm.touched.password &&
                            registerForm.errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                          onChange={registerForm.handleChange}
                          onBlur={registerForm.handleBlur}
                          value={registerForm.values.password}
                        />
                        <label htmlFor="password">Password</label>
                        {registerForm.touched.password &&
                          registerForm.errors.password && (
                            <div className="invalid-feedback">
                              {registerForm.errors.password}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-12 g-2">
                      <button
                        type="submit"
                        className="create-butt"
                        id="sign-butt"
                      >
                        CREATE
                      </button>
                    </div>
                    <div className="col-8 gx-1 gy-3">
                      Returning customer?
                      <NavLink className="reg" to={"/login"}>
                        {" "}
                        Sign-in
                      </NavLink>
                      <br />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <NotFound />{" "}
        </>
      )}
    </>
  );
};

export default Register;
