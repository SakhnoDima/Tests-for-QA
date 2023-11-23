import React from "react";
import FormComponent from "../components/Form/Form";
import TextAuth from "../components/TextAuth/TextAuth";
import Container from "../components/Container";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { operationsAuth } from "../redux/authSlice";

const AuthPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  if (token) {
    dispatch(operationsAuth.setToken(token));
    dispatch(operationsAuth.refreshUser());
  }
  return (
    <Container cls="main">
      <div className="pt-[42px] pb-[34px] mx-auto  laptop:pt-[80px] desktop:flex items-center gap-[112px] ">
        <TextAuth />
        <FormComponent />
      </div>
    </Container>
  );
};

export default AuthPage;
