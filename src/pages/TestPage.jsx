import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import ButtonOrigin from "../components/ButtonOrigin/ButtonOrigin";
import { ReactComponent as Arrow } from "../images/svg/arrowLong.svg";

import PageTestTitle from "../components/TestPageComponent/PageTestTitle";
import QuestionsCard from "../components/TestPageComponent/QuestionsCard";
import Container from "../components/Container";

const TestPage = () => {
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <Container cls="main">
      <PageTestTitle answers={answers} />

      <QuestionsCard
        index={index}
        setAnswers={setAnswers}
        answers={answers}
        direction={direction}
      />

      <div className=" flex justify-between items-center laptop:mb-[50px] ">
        <ButtonOrigin
          name="decrement"
          disabled={index === 0}
          onClick={() => {
            setIndex((prev) => prev - 1);
            setDirection(-1);
          }}
        >
          <Arrow className="rotate-180" />
          {isTablet && (
            <p className="text-white-color text-sl font-normal tracking-[0.24px] ">
              Previous question
            </p>
          )}
        </ButtonOrigin>
        <ButtonOrigin
          name="increment"
          disabled={index === 11}
          onClick={() => {
            setIndex((prev) => prev + 1);
            setDirection(+1);
          }}
        >
          {isTablet && (
            <p className=" text-sl font-normal tracking-[0.24px]">
              Next question
            </p>
          )}
          <Arrow />
        </ButtonOrigin>
      </div>
    </Container>
  );
};

export default TestPage;
