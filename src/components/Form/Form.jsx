import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { operationsAuth } from "../../redux/authSlice";
import FormBtn from "../FormBtn/FormBtn";
import { BtnForm } from "../ButtonForm/BtnForm";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be 6 symbols min";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const FormComponent = () => {
  const [email, setEmail] = useState();
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
    try {
      setEmail(formik.values.email);

      dispatch(operationsAuth.register(formik.values))
        .unwrap()
        .then((response) => {
          toast.success(response.message);
        })
        .catch((error) => {
          toast.error(error);
        });
    } catch (error) {
      toast(error.message);
    }
  };
  const handleSubmitLogIn = () => {
    dispatch(operationsAuth.logIn(formik.values))
      .unwrap()
      .catch((error) => {
        toast.error(error);
      });
  };
  const handleResendLetter = () => {
    dispatch(operationsAuth.sendLetter({ email: email }))
      .unwrap()
      .then((response) => {
        toast.success(response.message);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="bg-white-color w-[280px] px-[20px] py-[40px] shadow-[0px_4px_15px_0px_rgba(2,23,42,0.10)] laptop:w-[501px] laptop:mx-auto laptop:pt-[60px] laptop:pb-[48px] laptop:px-[32px] desktop:m-0 desktop:min-w-[501px]">
      <h2 className="text-sm font-medium text-center mb-[32px] laptop:font-normal laptop:text-s laptop:text-left ">
        You can use your Google Account to authorize:
      </h2>
      <FormBtn
        onClick={() => {
          dispatch(operationsAuth.googleRegister());
        }}
      />
      <h2 className="mb-[20px] mt-[32px] tracking-[0.2px] text-sm font-medium laptop:font-normal laptop:text-s laptop:text-left laptop:tracking-[0.28px] laptop:mb-[32px]">
        Or login to our app using e-mail and password:
      </h2>

      <form onSubmit={formik.handleSubmit}>
        <div className="mb-[20px] laptop:mb-[24px]">
          <input
            className="w-[240px] p-[20px] border-[1px] border-input-border  focus:border-[#4c4ace] laptop:px-[25] laptop:py-[20] laptop:w-[425px]"
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
        <div className="mb-[20px] laptop:mb-[40px]">
          <input
            className="w-[240px] p-[20px] border-[1px] border-input-border  focus:border-[#4c4ace] laptop:px-[25] laptop:py-[20] laptop:w-[425px]"
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
        <BtnForm $style={"logIn"} onClick={handleSubmitLogIn}>
          <p className="text-sm font-bold tracking-[0.2px] uppercase">
            sign up
          </p>
        </BtnForm>
        {email && (
          <BtnForm $style={"resendEmail"} onClick={handleResendLetter}>
            <p className="text-sm font-bold tracking-[0.2px] uppercase laptop:text-s">
              Resend verification Latter
            </p>
          </BtnForm>
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormComponent;
