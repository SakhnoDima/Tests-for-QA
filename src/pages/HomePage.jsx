import React from "react";
import { ReactComponent as LongLine } from "../../src/images/svg/Long Line.svg";
import ButtonHome from "../components/ButtonHome/ButtonHome";

const Home = () => {
  return (
    <>
      <div className="mt-[34px] mb-[40px]">
        <h1 className=" mb-[32px] text-center text-sl non-italic font-bold leading-[20px] tracking-[0.24px]">
          “Regression testing. What is it? If the system compiles, that's good,
          if it boots, that's great!”
        </h1>
        <LongLine className="mx-auto" />
        <h2 className="text-center mt-[12px] mb-[8px] text-sl non-italic font-medium leading-[14px] tracking-[0.24px]">
          Linus Torvalds
        </h2>
        <p className="text-center text-[#555] text-sm non-italic font-medium  leading-[12px] tracking-[0.2px]">
          Linux kernel creator, hacker, 1969
        </p>
      </div>
      <div className=" mb-[39px] flex flex-col gap-[20px] ">
        <ButtonHome prim={true}>
          <p className="text-white-color text-center text-mxl non-italic font-extrabold leading-none tracking-[0.48px]">
            QA technical training
          </p>
        </ButtonHome>
        <ButtonHome>
          <p className="text-white-color text-center text-mxl non-italic font-extrabold leading-none tracking-[0.48px]">
            Testing  theory
          </p>
        </ButtonHome>
      </div>
    </>
  );
};

export default Home;
