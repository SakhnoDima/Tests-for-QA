import React from "react";

const Container = ({ children }) => {
  return (
    <div className="m-auto w-[320px] px-5 laptop:w-[768px] laptop:px-[118px] desktop:w-[1280px] desktop:px-4 ">
      {children}
    </div>
  );
};

export default Container;
