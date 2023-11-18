import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { ReactComponent as Cat } from "../images/svg/Cat.svg";
import { useAllSelectors } from "../hooks/useAllSelectors";
import Button from "../components/ButtonHome/Button";
import Line from "../components/Line/Line";

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultsPage = () => {
  const { tests, results } = useAllSelectors();

  const data = {
    labels: ["Incorrect", "Correct"],
    datasets: [
      {
        label: "Answers:",
        data: [results?.false, results?.true],
        backgroundColor: ["#D7D7D7", "#FF6B09"],
      },
    ],
  };

  return (
    <>
      <h2 className="text-sl font-bold text-center mt-[34px] mb-[12px] tracking-[0.24px] laptop:mt-[42px] laptop:mb-[8px] laptop:text-ml laptop:tracking-[0.44px]  ">
        Results
      </h2>
      <p className="text-center text-sm font-medium tracking-[0.2px] mb-[16px] laptop:mb-[32px] laptop:text-s laptop:tracking-[0.28px]">
        {tests[0].test === "tech"
          ? "[ QA technical training ]"
          : "[ Testing  theory _ ]"}
      </p>
      <span className="mb-[32px] block w-[130px] h-[1px] mx-auto bg-[#00122F]/10 laptop:w-[336px] laptop:mb-[40px] desktop:w-[321px] desktop:mb-[40px] "></span>
      <div className="w-[156px] h-[156px] mx-auto laptop:w-[285px] laptop:h-[285px]">
        <Pie data={data} />
      </div>
      <div className="mt-[20px] flex justify-center laptop:mt-[32px]">
        <p className="text-sm font-medium tracking-[0.2px] laptop:text-sxl laptop:font-normal laptop:tracking-[0.32px] ">
          Correct answers - <span className="font-bold">{results.true}</span>
        </p>
        <Line cls={"resultLine"} />
        <p className="text-sm font-medium tracking-[0.2px] laptop:text-sxl laptop:font-normal laptop:tracking-[0.32px]">
          Total questions - <span className="font-bold">{results.total}</span>
        </p>
      </div>
      <Cat className="mx-auto my-[20px] laptop:w-[176px] laptop:mt-[32px] laptop:h-[176px] laptop:mb-[8px] desktop:mt-[28px]" />
      <p className="mb-[18px] text-center text-sxl font-bold tracking-[0.32px] laptop:mb-[8px] laptop:text-ml laptop:leading-[30px] laptop:tracking-[0.44px]">
        Not bad!
      </p>
      <p className="mb-[20px] text-center text-sm font-medium tracking-[0.2px] laptop:mb-[40px] laptop:text-m laptop:tracking-[0.4px]">
        But you still need to learn some materials.
      </p>
      <Button cls="tryAgain" link="/test" testsBtn={true}>
        <p className="text-s text-white-color font-normal tracking-[0.28px] laptop:font-medium">
          Try again
        </p>
      </Button>
    </>
  );
};

export default ResultsPage;
