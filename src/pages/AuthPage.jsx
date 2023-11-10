import React from "react";
import FormComponent from "../components/Form/Form";
import TextAuth from "../components/TextAuth/TextAuth";

const AuthPage = () => {
  return (
    <div className=" pb-[34px] mx-auto">
      <TextAuth />
      <FormComponent />
    </div>
  );
};

export default AuthPage;
