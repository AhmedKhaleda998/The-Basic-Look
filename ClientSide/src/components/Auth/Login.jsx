import React, { useEffect ,useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../services/auth.service";
import NotFound from "../pages/NotFound";
const Login = () => {
  const navigate = useNavigate();
  const formErrors = localStorage.getItem("LoginErrorMessage");
  const [showError, setShowError] = useState(false);
  const isAdmin = localStorage.getItem("role") === "admin"; 
  const handleRefresh = () => {
    localStorage.setItem("LoginErrorMessage", "");
    console.log("Page is being refreshed");
  };
  useEffect(() => {
    if (formErrors) {
      setShowError(true);

      const timeout = setTimeout(() => {
        setShowError(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [formErrors]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleRefresh);

    return () => {
      window.removeEventListener("beforeunload", handleRefresh);
    };
  }, []);
  const loginForm = useFormik({
    initialValues: {
      email: "ahmed@test.com",
      password: "Ahmed123",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (formValues) => {
      const data = await login(formValues);
      localStorage.setItem("LoginErrorMessage", "");
      localStorage.setItem("RegisterErrorMessage", "");
      isAdmin ? navigate("/admin"):navigate("/")
      
    },
  });
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  

  return (
    <>
      {!isLoggedIn ? (
        <div>
          <header>
            <h2 className="text-center">Login</h2>
          </header>

          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6">
                <form onSubmit={loginForm.handleSubmit}>
                  <div className="row">
                    <span className="text-danger fw-bold text-center">
                    {showError && <>{formErrors}</>}
                    </span>
                    <div className="col-md-12 col-sm-9 gy-2">
                      <div className="form-floating">
                        <input
                          className={`form-control border-1 border-dark bg-white w-100 
                      ${
                        loginForm.touched.email && loginForm.errors.email
                          ? "is-invalid"
                          : ""
                      }`}
                          type="email"
                          name="email"
                          id="login-email"
                          placeholder="email"
                          onChange={loginForm.handleChange}
                          onBlur={loginForm.handleBlur}
                          value={loginForm.values.email}
                        />
                        <label htmlFor="login-email" className="form-label">
                          E-mail
                        </label>
                        {loginForm.touched.email && loginForm.errors.email && (
                          <div className="invalid-feedback">
                            {loginForm.errors.email}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-sm-9 gy-2">
                      <div className="form-floating">
                        <input
                          className={`form-control border-1 border-dark bg-white w-100 ${
                            loginForm.touched.password &&
                            loginForm.errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                          type="password"
                          name="password"
                          id="login-password"
                          placeholder="password"
                          onChange={loginForm.handleChange}
                          onBlur={loginForm.handleBlur}
                          value={loginForm.values.password}
                        />
                        <label htmlFor="login-password" className="form-label">
                          Password
                        </label>
                        {loginForm.touched.password &&
                          loginForm.errors.password && (
                            <div className="invalid-feedback">
                              {loginForm.errors.password}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col gy-2">
                      <button
                        type="submit"
                        className="sign-butt"
                        id="sign-butt"
                      >
                        Sign-In
                      </button>
                    </div>
                    <div className="col gy-2">
                      New Customer?
                      <NavLink to="/register" className="reg">
                        {" "}
                        Create account
                      </NavLink>
                      <br></br>
                      <NavLink to="/forget" className="reg">
                        Forget Password?
                      </NavLink>
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

export default Login;
