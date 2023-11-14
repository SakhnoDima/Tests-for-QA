import React from "react";
import { ReactComponent as Arrow } from "../../images/svg/arrow.svg";
import { Link } from "react-router-dom";

const Button = ({
  children,
  prim = false,
  onClick,
  link = "/",
  testsBtn = false,
}) => {
  return (
    <Link
      to={link}
      type="button"
      onClick={onClick}
      className={` flex items-center justify-center ${
        testsBtn
          ? "bg-[#FF6B01] w-[130px] px-[14px] py-[17px]"
          : `w-[280px] h-[212px]  gap-[28px]  flex-col pt-[60px] pb-[42px] laptop:w-[400px] hover:scale-95 laptop:gap-[8px] ${
              prim ? "bg-bg-footer px-[52px]" : "bg-[#FF6B01] px-[87px]"
            } `
      }`}
    >
      {children}
      {!testsBtn && <Arrow />}
    </Link>
  );
};

export default Button;
