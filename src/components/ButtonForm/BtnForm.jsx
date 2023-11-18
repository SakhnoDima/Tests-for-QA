import React from "react";

export const BtnForm = ({ children, onClick, $style }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`
     ${
       $style === "register"
         ? "w-[109px] p-[25px] laptop:w-[210px] bg-active-color mr-[17px] text-white-color hover:text-active-btn-form hover:text-[18px] hover:scale-95"
         : ""
     } 
    ${
      $style === "logIn"
        ? "w-[109px] p-[25px] laptop:w-[210px] border-[1px] border-input-border  text-active-btn-form hover:text-active-color hover:scale-95"
        : " "
    }
         
        ${
          $style === "resendEmail"
            ? "block mx-auto mt-[10px] hover:underline hover:text-[#3E29F6]"
            : ""
        } `}
    >
      {children}
    </button>
  );
};
