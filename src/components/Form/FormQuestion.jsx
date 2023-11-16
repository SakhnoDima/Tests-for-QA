import React from "react";
import { useAllSelectors } from "../../hooks/useAllSelectors";
import { ReactComponent as Circle } from "../../images/svg/circle.svg";

const FormQuestion = ({ index, setAnswers, answers }) => {
  const { tests } = useAllSelectors();

  const handChange = (e) => {
    if (e.target.checked) {
      const rez = answers.findIndex(
        (el) => el.questionId === tests[index].questionId
      );

      if (rez >= 0) {
        answers.splice(rez, 1);
      }
      setAnswers([
        ...answers,
        {
          rightAnswer: e.target.value,
          questionId: tests[index].questionId,
        },
      ]);
    }
  };
  return (
    <form>
      {tests[index]?.answers?.map((item) => (
        <div key={item} className="relative flex gap-[20px] mb-[14px]">
          <input
            id={item}
            className="appearance-none w-[18px] h-[18px] border-[1px] border-[#000] rounded-full peer"
            type="radio"
            name="answer"
            value={item}
            onChange={handChange}
          />
          <Circle className="absolute top-[4px] left-[4px] hidden peer-checked:block" />
          <label
            htmlFor={item}
            className="w-[202px] block text-sm font-normal tracking-[0.2px] laptop:text-sxl laptop:tracking-[0.32px] laptop:w-[520px] desktop:w-[810px]"
          >
            {item}
          </label>
        </div>
      ))}
    </form>
  );
};

export default FormQuestion;
