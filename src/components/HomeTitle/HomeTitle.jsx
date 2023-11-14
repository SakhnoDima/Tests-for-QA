import React from "react";

const HomeTitle = () => {
  return (
    <div className="mx-auto mt-[34px] mb-[40px] laptop:mt-[82px] laptop:mb-[60px] desktop:mt-[120px] desktop:mb-[80px]">
      <h1 className=" mb-[32px] text-center text-sl non-italic font-bold leading-[20px] tracking-[0.24px] laptop:w-[650px] mx-auto laptop:text-ml laptop:leading-[30px] laptop:tracking-[0.44px] ">
        “Regression testing. What is it? <br />
        If the system compiles, that's good, if it boots, that's great!”
      </h1>
      <span className="block mt-[32px] w-[130px] h-[1px] mx-auto bg-[#00122F]/10 laptop:w-[322px] "></span>
      <h2 className="text-center mt-[12px] mb-[8px] text-sl non-italic font-medium leading-[14px] tracking-[0.24px] laptop:text-ms laptop:leading-none laptop:tracking-[0.36px]">
        Linus Torvalds
      </h2>
      <p className="text-center text-[#555] text-sm non-italic font-medium  leading-[12px] tracking-[0.2px] laptop:text-s laptop:leading-none laptop:tracking-[0.28px] ">
        Linux kernel creator, hacker, 1969
      </p>
    </div>
  );
};

export default HomeTitle;
