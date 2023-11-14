import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Avatar from "react-avatar";
import { ReactComponent as Logo } from "../../images/svg/logo 1.svg";
import { ReactComponent as Close } from "../../images/svg/close.svg";
import { ReactComponent as Menu } from "../../images/svg/menu-24px.svg";
import { ReactComponent as Exit } from "../../images/svg/sign-out.svg";
import useToggleModal from "../../hooks/useToggleModale";
import { useAllSelectors } from "../../hooks/useAllSelectors";
import { useDispatch } from "react-redux";
import { operationsAuth } from "../../redux/authSlice";
import ButtonOrigin from "../ButtonOrigin/ButtonOrigin";
import Nav from "../Nav/Nav";

const AppBar = () => {
  const dispath = useDispatch();
  const { isOpen, toggleModal } = useToggleModal();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const { email, isLoggedIn } = useAllSelectors();
  const name = email?.substr(0, email?.indexOf("@"));

  const handleClick = () => {
    dispath(operationsAuth.logOut());
  };
  return (
    <>
      <div
        className="min-w-[320px] m-auto flex  items-center justify-between relative 
    laptop:py-[20px] laptop:w-[100%] desktop:w-[1280px]"
      >
        <div className="p-5 laptop:p-0">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        {isTablet && <Nav isLoggedIn={isLoggedIn} />}
        {isLoggedIn && (
          <div className="flex items-center gap-[8px] pr-[20px] desktop:gap-[20px]">
            <Avatar
              round="50%"
              fgColor="#555555"
              color="#ffffff"
              name={name}
              size="30"
            />
            {!isMobile && (
              <p className="laptop:text-sl laptop:font-medium laptop:leading-[16px] laptop:tracking-[0.24px] desktop:text-s desktop:font-normal desktop:tracking-[0.28px]">
                {name}
              </p>
            )}
          </div>
        )}
        {isMobile && (
          <>
            <Nav
              onClose={toggleModal}
              handleClick={handleClick}
              isLoggedIn={isLoggedIn}
              isMobil={true}
              isOpen={isOpen}
            />
            <div className="border-l p-5">
              {isOpen ? (
                <ButtonOrigin onClick={toggleModal}>
                  <Close />
                </ButtonOrigin>
              ) : (
                <ButtonOrigin onClick={toggleModal}>
                  <Menu />
                </ButtonOrigin>
              )}
            </div>
          </>
        )}
      </div>
      {!isMobile && isLoggedIn && (
        <div className="border-l pl-[20px] flex items-center">
          <ButtonOrigin onClick={handleClick}>
            <Exit />
          </ButtonOrigin>
        </div>
      )}
    </>
  );
};

export default AppBar;
