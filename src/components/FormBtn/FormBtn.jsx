import React from "react";
import { ReactComponent as Google } from "../../images/svg/google.svg";

const FormBtn = ({ onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="flex gap-[10px] drop-shadow-btn-shadow px-[38px] py-[17px] bg-btn-color 
      hover:bg-[#c8c8c8] mx-auto laptop:m-0"
    >
      <Google />
      <span className="font-mon text-s font-bold tracking-[0.28px]">
        Google
      </span>
    </button>
  );
};

export default FormBtn;
