import React from "react";

const ButtonNav = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonNav;
