import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const ForgetPass = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <div>
      <header>
        <h2 className="text-center">Login</h2>
      </header>

      <div className="container bigbox">
        <form noValidate onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col g-1">
              <h5>Reset your password</h5>
              <p>We will send you an email to reset your password.</p>
              <div className="form-floating">
                <input
                  className={`form-control border-black bg-white ${
                    formik.touched.email && formik.errors.email ? 'is-invalid' : ''
                  }`}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                {formik.touched.email && formik.errors.email && (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2 g-1">
              <button type="submit" className="submit-butt" id="sub-butt">
                Submit
              </button>
            </div>
            <div className="col-2 g-1 offset-2">
              <button
                onClick={() => navigate('/login')}
                className="submit-butt"
                id="sign-butt"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;