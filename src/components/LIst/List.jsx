import React from "react";
import { motion } from "framer-motion";
import { listVariants } from "../../constant/variantsPresents";
const listStyle =
  "w-[207px] ml-[10px] text-sm font-medium leading-[16px] tracking-[0.2px] list-decimal laptop:w-[254px] laptop:text-s laptop:leading-[22px] laptop:tracking-[0.28px] laptop:ml-[94px]";

const List = ({ err, isLink = false }) => {
  return (
    <ul className="mb-[32px]">
      {!isLink &&
        err.map((el, i) => (
          <motion.li
            variants={listVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            key={el}
            className={`${listStyle}`}
          >
            {el}
          </motion.li>
        ))}
      {isLink &&
        err.map(({ name, link }, i) => (
          <motion.li
            variants={listVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            key={name}
            className={`${listStyle} underline  hover:text-active-link`}
          >
            <a href={link}>{name}</a>
          </motion.li>
        ))}
    </ul>
  );
};

export default List;
