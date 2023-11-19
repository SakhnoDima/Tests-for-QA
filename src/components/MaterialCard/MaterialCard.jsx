import React from "react";
import Line from "../Line/Line";
import List from "../LIst/List";

const MaterialCard = ({ title, list, isLink = false }) => {
  return (
    <>
      <h2 className="text-ms font-bold tracking-[0.36px] leading-[22px] w-[129px] laptop:w-[336px] laptop:text-ml laptop:leading-[30px] laptop:tracking-[0.44px]">
        {title}
      </h2>
      <Line cls="materials" />
      <List err={list} isLink={isLink} />
    </>
  );
};

export default MaterialCard;
