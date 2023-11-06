import React from "react";
import { ReactComponent as Logo } from "../../images/svg/logo 1.svg";
import { ReactComponent as Close } from "../../images/svg/close.svg";
import { ReactComponent as Menu } from "../../images/svg/menu-24px.svg";
import { Link, NavLink } from "react-router-dom";
import useToggleModal from "../../hooks/useToggleModale";

const AppBar = () => {
  const { isOpen, toggleModal } = useToggleModal();
  return (
    <>
      <div
        className="m-auto flex  items-center justify-between relative 
      w-[320px] laptop:w-[768px] laptop:px-8 desktop:w-[1280px]"
      >
        <div className="p-5">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <nav
          className={`absolute w-[320px] flex justify-center bg-bg-container bottom-[-25px] left-0 ${
            isOpen ? "" : "-left-[100%]"
          }`}
        >
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
        <div className="border-l p-5">
          {isOpen ? (
            <button onClick={toggleModal}>
              <Close />
            </button>
          ) : (
            <button onClick={toggleModal}>
              <Menu />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AppBar;
