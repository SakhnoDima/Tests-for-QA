import React from "react";

const Container = ({ children }) => {
  return (
    <section className="mx-auto w-[320px] px-5 laptop:w-[768px]  desktop:px-[124px] desktop:w-[100%] ">
      {children}
    </section>
  );
};

export default Container;

// laptop:px-[118px] - не корректно отображался текст на Home
