import React from "react";

import { useAllSelectors } from "../hooks/useAllSelectors";

const ResultsPage = () => {
  const { tests, results } = useAllSelectors();
  console.log(tests);
  console.log(results);

  return (
    <div>
      <h2 className="text-sl font-bold text-center mt-[34px] mb-[12px] tracking-[0.24px]">
        Results
      </h2>
      <p className="text-center text-sm font-medium tracking-[0.2px] mb-[16px] ">
        {tests[0].test === "tech"
          ? "[ QA technical training ]"
          : "[ Testing  theory _ ]"}
      </p>
      <span className="mb-[32px] block w-[130px] h-[1px] mx-auto bg-[#00122F]/10 laptop:w-[336px] laptop:mb-[40px] desktop:mb-[32px] "></span>

      <div className="flex justify-center">
        <p className="text-sm">
          Correct answers - <span>{results.true}</span>
        </p>
        <span className="ml-[10px] mr-[10px] w-[1px] bg-[#00122F]/10"></span>
        <p className="text-sm">
          Total questions - <span>{results.total}</span>
        </p>
      </div>
    </div>
  );
};

export default ResultsPage;
