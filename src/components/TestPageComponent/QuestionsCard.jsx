import React from "react";
import { useAllSelectors } from "../../hooks/useAllSelectors";
import FormQuestion from "../Form/FormQuestion";
import Line from "../Line/Line";

const QuestionsCard = ({ index, setAnswers, answers }) => {
  const { tests } = useAllSelectors();
  return (
    <div className="min-h-[456px] bg-white-color drop-shadow-form-shadow px-[20px] py-[40px] mb-[20px] laptop:px-[73px] laptop:min-h-[453px] desktop:min-h-[445px] desktop:px-[87px]">
      <p className="text-[#555] uppercase text-center mb-[20px] text-sm font-normal tracking-[0.2px] laptop:normal-case laptop:text-s laptop:tracking-[0.28px]">
        Question{" "}
        <span className="uppercase text-active-color font-bold laptop:tracking-[0.28px]">
          {index + 1}
        </span>{" "}
        / <span>{tests.length}</span>
      </p>
      <p className="mb-[32px] text-center text-sl font-bold leading-[18px] tracking-[0.24px] laptop:text-ms laptop:leading-[30px] laptop:tracking-[0.44px]">
        {tests[index]?.question}
      </p>
      <Line cls={"questionLine"} />
      <FormQuestion index={index} setAnswers={setAnswers} answers={answers} />
    </div>
  );
};

export default QuestionsCard;
