import React from "react";

const ButtonOrigin = ({
  children,
  onClick,
  disabled = false,
  name,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`disabled:opacity-10
      ${
        name === "decrement" &&
        "w-[55px] px-[15px] py-[5px] bg-active-color fill-white-color mb-[20px]"
      }
      ${
        name === "increment" &&
        "w-[55px] px-[15px] py-[5px] bg-white-color fill-[#02172A] mb-[20px]"
      }
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonOrigin;
