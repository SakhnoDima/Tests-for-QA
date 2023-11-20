import React from "react";

const Line = ({ cls }) => {
  return (
    <span
      className={` bg-[#00122F]/10  ${
        cls === "resultLine" ? "mx-[10px] w-[1px] laptop:mx-[20px]" : ""
      }
          ${
            cls === "questionLine"
              ? "mb-[32px] block w-[130px] h-[1px] mx-auto laptop:w-[336px] laptop:mb-[40px] desktop:mb-[32px] "
              : ""
          }
          ${
            cls === "materials"
              ? "h-[1px] w-[120px] block mt-[12px] mb-[8px] laptop:mt-[20px] laptop:mb-[24px]"
              : ""
          }
           ${
             cls === "contact"
               ? "mx-auto h-[1px] w-[130px] block mt-[20px] mb-[40px] laptop:w-[321px]"
               : ""
           }
`}
    ></span>
  );
};

export default Line;
