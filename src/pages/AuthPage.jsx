import React from "react";
import FormComponent from "../components/Form/Form";
import TextAuth from "../components/TextAuth/TextAuth";
import Container from "../components/Container";

const AuthPage = () => {
  return (
    <Container>
      <div className="pt-[42px] pb-[34px] mx-auto  laptop:pt-[80px] desktop:flex items-center gap-[112px] ">
        <TextAuth />
        <FormComponent />
      </div>
    </Container>
  );
};

export default AuthPage;
