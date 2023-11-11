import React from "react";
import FormComponent from "../components/Form/Form";
import TextAuth from "../components/TextAuth/TextAuth";

const AuthPage = () => {
  return (
    <div className="pt-[42px] pb-[34px] mx-auto  laptop:pt-[80px] desktop:flex items-center gap-[112px] ">
      <TextAuth />
      <FormComponent />
    </div>
  );
};

export default AuthPage;
