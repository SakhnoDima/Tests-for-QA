import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ReactComponent as Exit } from "../../images/svg/sign-out.svg";
import ButtonOrigin from "../ButtonOrigin/ButtonOrigin";
import { navigationVariants } from "../../constant/variantsPresents";

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
    <motion.nav
      variants={navigationVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
      }}
      key={isOpen}
      className={` ${
        isMobil
          ? `absolute z-10 left-0 w-[320px] flex flex-col justify-center items-center bg-bg-container ${
              isLoggedIn ? "-bottom-[260px]" : "-bottom-[147px]"
            } `
          : `w-[320px] flex gap-[60px] items-baseline justify-between bg-bg-container 
            ${!isLoggedIn && "justify-between"} desktop:gap-[80px]`
      }  `}
    >
      {isLoggedIn ? (
        <>
          <NavLink
            onClick={onClose}
            className={` text-s font-normal  leading-[16px] tracking-[0.28px] ${
              isMobil ? "py-6 border-b w-full text-center" : " "
            }
                laptop:text-sl laptop:font-medium laptop:tracking-[0.24px]
                desktop:text-s desktop:font-normal desktop:tracking-[0.28px]`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={onClose}
            className={` text-s font-normal  leading-[16px] tracking-[0.28px] ${
              isMobil ? "py-6 border-b w-full text-center" : " "
            }
                 laptop:text-sl font-medium laptop:tracking-[0.24px]
                  desktop:text-s desktop:font-normal desktop:tracking-[0.28px]`}
            to="/useful-info"
          >
            Materials
          </NavLink>
        </>
      ) : (
        <NavLink
          onClick={onClose}
          className={` text-s font-normal  leading-[16px] tracking-[0.28px] ${
            isMobil ? "py-6 border-b w-full text-center" : " "
          }  laptop:text-sl font-medium laptop:tracking-[0.24px]
           desktop:text-s desktop:font-normal desktop:tracking-[0.28px]`}
          to="/auth"
        >
          Authenticate
        </NavLink>
      )}

      <NavLink
        onClick={onClose}
        className={` text-s font-normal  leading-[16px] tracking-[0.28px] ${
          isMobil ? "py-6 border-b w-full text-center" : " "
        }   laptop:text-sl font-medium laptop:tracking-[0.24px] 
         desktop:text-s desktop:font-normal desktop:tracking-[0.28px]`}
        to="/contacts"
      >
        Contacts
      </NavLink>
      {isLoggedIn && isMobil && (
        <div className="py-6 w-full flex justify-center">
          <ButtonOrigin onClick={closeOnClick}>
            <Exit />
          </ButtonOrigin>
        </div>
      )}
    </motion.nav>
  );
};

export default Nav;
