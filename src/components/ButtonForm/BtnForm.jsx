import React from "react";

export const BtnForm = ({ children, onClick, $style }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`w-[109px] p-[25px] ${
        $style === "register"
          ? "bg-active-color mr-[20px] text-white-color hover:text-active-btn-form hover:text-[18px]"
          : "border-[1px] border-input-border  text-active-btn-form hover:text-active-color "
      }`}
    >
      {children}
    </button>
  );
};
