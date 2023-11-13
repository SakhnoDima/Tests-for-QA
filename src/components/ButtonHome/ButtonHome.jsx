import React from "react";
import { ReactComponent as Arrow } from "../../images/svg/arrow.svg";

const ButtonHome = ({ children, prim = false }) => {
  return (
    <button
      type="button"
      className={` w-[280px] h-[212px] flex gap-[28px] items-center justify-center flex-col pt-[60px] pb-[42px] ${
        prim ? "bg-bg-footer px-[52px]" : "bg-[#FF6B01] px-[87px]"
      } `}
    >
      {children} <Arrow />
    </button>
  );
};

export default ButtonHome;
