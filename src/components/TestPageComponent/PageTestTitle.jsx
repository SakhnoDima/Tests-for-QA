import React from "react";
import { useDispatch } from "react-redux";
import { operationsTests } from "../../redux/testsSlice";
import Button from "../ButtonHome/Button";
import { useAllSelectors } from "../../hooks/useAllSelectors";

const PageTestTitle = ({ answers }) => {
  const dispatch = useDispatch();
  const { tests } = useAllSelectors();

  const handleSendAnswer = () => {
    if (answers.length === 12) {
      switch (tests[0]?.test) {
        case "tech":
          dispatch(operationsTests.getTechnicalAnswers(answers));
          break;
        case "theory":
          dispatch(operationsTests.getTheoryAnswers(answers));
          break;

        default:
          break;
      }
    }
  };
  return (
    <div className="mt-[28px] mb-[18px] flex justify-between items-center laptop:mt-[42px] laptop:mb-[30px] ">
      <p className=" w-[68px] text-s font-normal tracking-[0.28px] laptop:text-ml laptop:tracking-[0.44px] laptop:w-[175px] desktop:font-medium">
        {tests[0]?.test === "tech"
          ? "[ QA technical training ]"
          : "[ Testing  theory _ ]"}
      </p>
      <Button
        testsBtn={true}
        onClick={handleSendAnswer}
        link={answers.length === 12 ? "/results" : "/"}
      >
        <p className="text-white-color text-sm not-italic font-normal tracking-[0.2px] laptop:text-s laptop:font-medium laptop:tracking-[0.28px] ">
          Finish test
        </p>
      </Button>
    </div>
  );
};

export default PageTestTitle;
