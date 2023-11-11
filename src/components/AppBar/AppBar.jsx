import React from "react";
import { Link } from "react-router-dom";
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
import ButtonNav from "../ButtonNav/ButtonNav";
import Nav from "../Nav/Nav";

const AppBar = () => {
  const dispath = useDispatch();
  const { isOpen, toggleModal } = useToggleModal();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 767px)" });
  const { email, isLoggedIn } = useAuth();
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
        {isTablet && (
          <div className="flex items-center gap-[40px] desktop:gap-[80px]">
            <Nav isLoggedIn={isLoggedIn} />
            {isLoggedIn && (
              <div className="flex items-center gap-[8px] pr-[20px] desktop:gap-[20px]">
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
                <ButtonNav onClick={toggleModal}>
                  <Close />
                </ButtonNav>
              ) : (
                <ButtonNav onClick={toggleModal}>
                  <Menu />
                </ButtonNav>
              )}
            </div>
          </>
        )}
      </div>
      {!isMobile && isLoggedIn && (
        <div className="border-l pl-[20px] flex items-center">
          <ButtonNav onClick={handleClick}>
            <Exit />
          </ButtonNav>
        </div>
      )}
    </>
  );
};

export default AppBar;
