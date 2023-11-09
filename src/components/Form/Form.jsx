import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { operationsAuth } from "../../redux/authSlice";
import FormBtn from "../FormBtn/FormBtn";
import { BtnForm } from "../ButtonForm/BtnForm";

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
    <div className="bg-white-color w-[280px] px-[20px] py-[40px] shadow-[0px_4px_15px_0px_rgba(2,23,42,0.10)]">
      <h2 className="text-sm font-medium text-center mb-[32px]">
        You can use your Google Account to authorize:
      </h2>
      <FormBtn onClick={() => console.log(1)} />
      <h2 className="mb-[30px] mt-[32px] tracking-[0.2px] text-sm font-medium">
        Or login to our app using e-mail and <br /> password:
      </h2>

      <form onSubmit={formik.handleSubmit}>
        <div className="mb-[20px]">
          <input
            className="w-[240px] p-[20px] border-[1px] border-input-border  focus:border-[#4c4ace]"
            placeholder="E-mail"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <p className="text-sm font-medium text-[#FF0000]">
              {formik.errors.email}
            </p>
          ) : null}
        </div>
        <div className="mb-[20px]">
          <input
            className="w-[240px] p-[20px] border-[1px] border-input-border  focus:border-[#4c4ace]"
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <p className="text-sm font-medium text-[#FF0000]">
              {formik.errors.password}
            </p>
          ) : null}
        </div>
        <BtnForm $style={"register"} onClick={handleSubmitRegister}>
          <p className="text-sm font-bold tracking-[0.2px] uppercase">
            sign in
          </p>
        </BtnForm>
        <BtnForm onClick={handleSubmitLogIn}>
          <p className="text-sm font-bold tracking-[0.2px] uppercase">
            sign up
          </p>
        </BtnForm>
      </form>
    </div>
  );
};

export default FormComponent;
