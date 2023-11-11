import React from "react";

const Container = ({ children }) => {
  return (
    <section className="mx-auto w-[320px] px-5 laptop:w-[768px] laptop:px-[118px] desktop:px-[124px] desktop:w-[100%] ">
      {children}
    </section>
  );
};

export default Container;
