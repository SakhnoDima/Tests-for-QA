import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Exit } from "../../images/svg/sign-out.svg";
import ButtonNav from "../ButtonNav/ButtonNav";

const Nav = ({
  isLoggedIn,
  isMobil = false,
  handleClick = false,
  isOpen = false,
  onClose,
}) => {
  const closeOnClick = () => {
    onClose();
    handleClick();
  };
  return (
    <div>
      <nav
        className={`${
          isMobil
            ? `absolute left-0 w-[320px] flex flex-col justify-center items-center bg-bg-container ${
                isLoggedIn ? "-bottom-[284px]" : "-bottom-[147px]"
              } ${isOpen ? "visible" : "invisible"}`
            : `w-[320px] flex gap-[60px] items-baseline bg-bg-container 
            ${!isLoggedIn && "justify-between"} desktop:gap-[80px]`
        }  `}
      >
        {isLoggedIn ? (
          <>
            <NavLink
              onClick={onClose}
              className={` ${
                isMobil ? "py-6 border-b w-full text-center" : " "
              }`}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={onClose}
              className={` ${
                isMobil ? "py-6 border-b w-full text-center" : " "
              }`}
              to="/materials"
            >
              Materials
            </NavLink>
          </>
        ) : (
          <NavLink
            onClick={onClose}
            className={` ${isMobil ? "py-6 border-b w-full text-center" : " "}`}
            to="/auth"
          >
            Authenticate
          </NavLink>
        )}

        <NavLink
          onClick={onClose}
          className={` ${isMobil ? "py-6 border-b w-full text-center" : " "}`}
          to="/contacts"
        >
          Contacts
        </NavLink>
        {isLoggedIn && isMobil && (
          <div className="py-6 w-full flex justify-center">
            <ButtonNav onClick={closeOnClick}>
              <Exit />
            </ButtonNav>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
