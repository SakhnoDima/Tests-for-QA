import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Avatar from "react-avatar";
import { ReactComponent as Logo } from "../../images/svg/logo 1.svg";
import { ReactComponent as Close } from "../../images/svg/close.svg";
import { ReactComponent as Menu } from "../../images/svg/menu-24px.svg";
import { ReactComponent as Exit } from "../../images/svg/sign-out.svg";
import useToggleModal from "../../hooks/useToggleModale";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { operationsAuth } from "../../redux/authSlice";

const AppBar = () => {
  const dispath = useDispatch();
  const { isOpen, toggleModal } = useToggleModal();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 767px)" });
  const { email, isLoggedIn } = useAuth();
  const name = email?.email?.substr(0, email.email.indexOf("@"));

  const handleClick = () => {
    dispath(operationsAuth.logOut());
  };
  return (
    <div className="flex">
      <div
        className="m-auto flex  items-center justify-between relative 
      w-[320px] laptop:w-[768px] laptop:px-[32px] laptop:py-[20px] desktop:w-[1280px]"
      >
        <div className="p-5 laptop:p-0">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        {isTablet && (
          <>
            <div className="flex items-center gap-[40px]">
              <nav
                className={`w-[320px] flex gap-[60px] items-baseline bg-bg-container 
                ${!isLoggedIn && "justify-between"}`}
              >
                {isLoggedIn ? (
                  <>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/materials">Materials</NavLink>
                  </>
                ) : (
                  <NavLink to="/auth">Authenticate</NavLink>
                )}

                <NavLink to="/contacts">Contacts</NavLink>
              </nav>
              {isLoggedIn && (
                <div className="flex gap-[8px]">
                  <Avatar
                    round="50%"
                    fgColor="#555555"
                    color="#ffffff"
                    name={name}
                    size="30"
                  />
                  <p>{name}</p>
                </div>
              )}
            </div>
          </>
        )}

        {isMobile && (
          <>
            <nav
              className={`absolute left-0 w-[320px] flex flex-col justify-center items-center bg-bg-container ${
                isLoggedIn ? "-bottom-[284px]" : "-bottom-[147px]"
              } ${isOpen ? "visible" : "invisible"} laptop:static `}
            >
              {isLoggedIn ? (
                <>
                  <NavLink
                    className="py-6 border-b w-full text-center"
                    to="/"
                    onClick={toggleModal}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className="py-6 border-b w-full text-center"
                    to="/materials"
                    onClick={toggleModal}
                  >
                    Materials
                  </NavLink>
                </>
              ) : (
                <NavLink
                  className="py-6 border-b w-full text-center"
                  to="/auth"
                  onClick={toggleModal}
                >
                  Authenticate
                </NavLink>
              )}

              <NavLink
                className="py-6 border-b w-full text-center"
                to="/contacts"
                onClick={toggleModal}
              >
                Contacts
              </NavLink>
              {isLoggedIn && (
                <div className="mx-auto">
                  <button onClick={handleClick} className="py-6 w-full mx-auto">
                    <Exit />
                  </button>
                </div>
              )}
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
          </>
        )}
      </div>
      {!isMobile && isLoggedIn && (
        <button onClick={handleClick} className=" border-l pr-[32px] pl-[20px]">
          <Exit />
        </button>
      )}
    </div>
  );
};

export default AppBar;
