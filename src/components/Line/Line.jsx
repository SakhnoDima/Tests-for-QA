import React from "react";

const Line = ({ cls }) => {
  return (
    <span
      className={`${
        cls === "resultLine"
          ? "mx-[10px] w-[1px] bg-[#00122F]/10 laptop:mx-[20px]"
          : ""
      }
          ${
            cls === "questionLine"
              ? "mb-[32px] block w-[130px] h-[1px] mx-auto bg-[#00122F]/10 laptop:w-[336px] laptop:mb-[40px] desktop:mb-[32px] "
              : ""
          }
`}
    ></span>
  );
};

export default Line;
