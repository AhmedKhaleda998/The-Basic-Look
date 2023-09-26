import React, { useEffect, useState } from "react";
import { useFormik, resetForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import { contact } from "../../../services/contact.service";

const Contact = () => {
  const [showError, setShowError] = useState(false);
  const formErrors = sessionStorage.getItem("ContactErrorMessage");
 

  const handleRefresh = () => {
    sessionStorage.setItem("ContactErrorMessage", "");
    console.log("Page is being refreshed");
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleRefresh);

    return () => {
      window.removeEventListener("beforeunload", handleRefresh);
    };
  }, []);
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);

    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };
  const successMessage = sessionStorage.getItem("SuccessMessage");
  const ContactForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (formValues, { resetForm }) => {
      try {
        const data = await contact(formValues);
        sessionStorage.setItem("ContactErrorMessage", "");
        handleButtonClick();
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });
  useEffect(() => {
    if (formErrors) {
      setShowError(true);

      const timeout = setTimeout(() => {
        setShowError(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [ContactForm.values]);
  return (
    <div>
      <header>
        <h2 className="text-center">Contact</h2>
      </header>

      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <form onSubmit={ContactForm.handleSubmit}>
              <div className="row">
                <div className="text-danger fw-bold text-center">
                  {showError && <>{formErrors}</>}
                  {showMessage && (
                    <h5 className="text-success">{successMessage}</h5>
                  )}
                </div>
                <div className="col-md-6 gy-2">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      placeholder="name"
                      className="form-control border-1 border-dark bg-white"
                      value={ContactForm.values.name}
                      onChange={ContactForm.handleChange}
                      onBlur={ContactForm.handleBlur}
                      autoComplete="name"
                    />
                    <label htmlFor="contact-name" className="form-label">
                      Name
                    </label>
                    {ContactForm.touched.name && ContactForm.errors.name && (
                      <div className="text-danger">
                        {ContactForm.errors.name}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-6 gy-2">
                  <div className="form-floating">
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      placeholder="email"
                      className="form-control border-1 border-dark bg-white"
                      value={ContactForm.values.email}
                      onChange={ContactForm.handleChange}
                      onBlur={ContactForm.handleBlur}
                      autoComplete="email"
                    />
                    <label htmlFor="contact-email" className="form-label">
                      E-mail
                    </label>
                    {ContactForm.touched.email && ContactForm.errors.email && (
                      <div className="text-danger">
                        {ContactForm.errors.email}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-md-6 gy-2">
                  <div className="form-floating">
                    <input
                      type="number"
                      name="phone"
                      id="contact-phone"
                      placeholder="phone"
                      className="form-control border-1 border-dark bg-white"
                      value={ContactForm.values.phone}
                      onChange={ContactForm.handleChange}
                      onBlur={ContactForm.handleBlur}
                      autoComplete="phone"
                    />
                    <label htmlFor="contact-phone" className="form-label">
                      Phone Number
                    </label>
                    {ContactForm.touched.phone && ContactForm.errors.phone && (
                      <div className="text-danger">
                        {ContactForm.errors.phone}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 gy-2">
                  <div className="form-floating">
                    <textarea
                      name="message"
                      id="contact-message"
                      cols="50"
                      rows="10"
                      className="form-control border-1 border-dark bg-white h-50"
                      value={ContactForm.values.message}
                      onChange={ContactForm.handleChange}
                      onBlur={ContactForm.handleBlur}
                    ></textarea>
                    <label htmlFor="contact-message">Message</label>
                    {ContactForm.touched.message &&
                      ContactForm.errors.message && (
                        <div className="text-danger">
                          {ContactForm.errors.message}
                        </div>
                      )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col gy-2">
                  <button
                    className="send-butt"
                    id="contact-send-butt"
                    type="submit"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
