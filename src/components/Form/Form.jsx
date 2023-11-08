import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { operationsAuth } from "../../redux/authSlice";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const FormComponent = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });

  const handleSubmitRegister = () => {
    dispatch(operationsAuth.register(formik.values));
  };
  const handleSubmitLogIn = () => {
    dispatch(operationsAuth.logIn(formik.values));
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <button type="submit" onClick={handleSubmitRegister}>
          Register
        </button>
        <button type="submit" onClick={handleSubmitLogIn}>
          LogIn
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
