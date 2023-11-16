import React from "react";
import { useDispatch } from "react-redux";
import { operationsTests } from "../../redux/testsSlice";
import Button from "./Button";

const ButtonHome = () => {
  const dispatch = useDispatch();
  return (
    <div className=" mb-[39px] flex justify-center flex-col items-center gap-[20px] laptop:gap-[30px] laptop:mb-[125px] desktop:mb-[133px] desktop:flex-row desktop:gap-[32px]">
      <Button
        link="/test"
        prim={true}
        onClick={() => {
          dispatch(operationsTests.getTechnical());
        }}
      >
        <p className="text-white-color text-center text-mxl non-italic font-extrabold leading-none tracking-[0.48px] laptop:text-ll laptop:tracking-[0.64px]">
          QA technical training
        </p>
      </Button>
      <Button
        link="/test"
        onClick={() => {
          dispatch(operationsTests.getTheory());
        }}
      >
        <p className="text-white-color text-center text-mxl non-italic font-extrabold leading-none tracking-[0.48px] laptop:text-ll laptop:tracking-[0.64px]">
          Testing theory
        </p>
      </Button>
    </div>
  );
};

export default ButtonHome;
