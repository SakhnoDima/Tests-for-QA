import React from "react";
import { motion } from "framer-motion";
import { comand } from "../../constant/constant";

const CommandCard = () => {
  return (
    <>
      {comand.map(({ foto, name, position, text }) => (
        <motion.div
          className="w-[280px] bg-white-color laptop:w-[336px] laptop:mx-auto "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={foto} alt={name} />
          <div className="pt-[20px] px-[20px] pb-[22px] laptop:pl-[28px] laptop:pr-[71px] laptop:pb-[18px]">
            <p className="mb-[6px] text-sl font-bold leading-[12px] tracking-[1.44px] uppercase ">
              Name : {name}
            </p>
            <p className="mb-[10px] text-sl text-[#555] font-normal leading-[12px] tracking-[0.24px]">
              {position}
            </p>
            <p className="text-sl font-normal leading-[16px] tracking-[0.24px]">
              {text}
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default CommandCard;
