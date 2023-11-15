import React, { useState } from "react";
import { useAllSelectors } from "../hooks/useAllSelectors";
import Button from "../components/ButtonHome/Button";
import ButtonOrigin from "../components/ButtonOrigin/ButtonOrigin";
import { ReactComponent as Arrow } from "../images/svg/arrowLong.svg";
import { useDispatch } from "react-redux";
import { operationsTests } from "../redux/testsSlice";
import FormQuestion from "../components/Form/FormQuestion";

const TestPage = () => {
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);
  const { tests } = useAllSelectors();
  const dispatch = useDispatch();

  const handleSendAnswer = () => {
    console.log(answers);
    if (answers.length === 12) {
      switch (tests[index].test) {
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
    <>
      <div className="mt-[28px] mb-[18px] flex justify-between items-center ">
        <p className=" w-[68px] text-s font-normal tracking-[0.28px]">
          {tests[0]?.test === "tech"
            ? "[ QA technical training ]"
            : "[ Testing  theory _ ]"}
        </p>
        <Button testsBtn={true} onClick={handleSendAnswer}>
          <p className="text-white-color text-sm not-italic font-normal tracking-[0.2px]">
            Finish test
          </p>
        </Button>
      </div>
      <div className="min-h-[456px] bg-white-color drop-shadow-form-shadow px-[20px] py-[40px] mb-[20px]">
        <p className="text-[#555] uppercase text-center mb-[20px] text-sm font-normal tracking-[0.2px]">
          question <span className="text-active-color">{index + 1}</span> /{" "}
          <span>{tests.length}</span>
        </p>
        <p className="mb-[32px] text-center text-sl font-bold leading-[18px] tracking-[0.24px]">
          {tests[index]?.question}
        </p>
        <span className="mb-[32px] block w-[130px] h-[1px] mx-auto bg-[#00122F]/10 "></span>
        <FormQuestion index={index} setAnswers={setAnswers} />
      </div>
      <div className=" flex justify-between items-center">
        <ButtonOrigin
          name="decrement"
          disabled={index === 0}
          onClick={() => {
            setIndex((prev) => prev - 1);
          }}
        >
          <Arrow className="rotate-180" />
        </ButtonOrigin>
        <ButtonOrigin
          name="increment"
          disabled={index === 11}
          onClick={() => {
            setIndex((prev) => prev + 1);
          }}
        >
          <Arrow />
        </ButtonOrigin>
      </div>
    </>
  );
};

export default TestPage;
