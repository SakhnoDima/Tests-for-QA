import React from "react";

const TextAuth = () => {
  return (
    <div className=" mb-[24px] desktop:w-[420px] desktop:m-0">
      <h2 className="text-m font-extrabold tracking-[0.4px] mb-[8px] not-italic laptop:text-l laptop:mb-[20px] laptop:tracking-[0.6px] desktop:text-lxl desktop:tracking-[0.68px]">
        Pro Test
      </h2>
      <p className="text-sl tracking-[0.24px] font-medium leading-[20px] text-[#555] laptop:text-sxl laptop:leading-[36px] laptop:tracking-[0.32px] desktop:text-ms desktop:font-normal desktop:tracking-[0.36px] ">
        <span className="text-[#000] desktop:font-bold">[ </span> We will help
        you find weak points in knowledge so that you can strengthen it. We will
        show you what is relevant to know for a
        <span className="font-semibold text-[#000]  desktop:font-bold">
          {" "}
          QA Engineer
        </span>
        and will try to make the learning process more diverse_
        <span className="text-[#000]  desktop:font-bold"> ]</span>
      </p>
    </div>
  );
};

export default TextAuth;
