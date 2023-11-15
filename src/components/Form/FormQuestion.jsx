import React, { useState } from "react";
import { useAllSelectors } from "../../hooks/useAllSelectors";
import { ReactComponent as Circle } from "../../images/svg/circle.svg";

const FormQuestion = ({ index, setAnswers }) => {
  const [answer, setAnswer] = useState([]);
  const { tests } = useAllSelectors();

  const handChange = (e) => {
    if (e.target.checked) {
      const rez = answer.findIndex(
        (el) => el.questionId === tests[index].questionId
      );

      if (rez >= 0) {
        answer.splice(rez, 1);
      }
      setAnswer([
        ...answer,
        {
          rightAnswer: e.target.value,
          questionId: tests[index].questionId,
        },
      ]);
      setAnswers([...answer]);
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
          <label
            htmlFor={item}
            className="w-[202px] block relative text-sm font-normal tracking-[0.2px]"
          >
            {item}
          </label>
          <Circle className="absolute top-[4px] left-[4px] hidden peer-checked:block" />
        </div>
      ))}
    </form>
  );
};

export default FormQuestion;
