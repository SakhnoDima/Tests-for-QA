import React from "react";
import { ReactComponent as C } from "../../images/svg/copyright-24px 1.svg";
import { ReactComponent as Heart } from "../../images/svg/favorite-heart-button.svg";
import { ReactComponent as I } from "../../images/svg/Vector 1.svg";
const Footer = () => {
  return (
    <h4 className="text-text-footer text-sm font-normal tracking-[0.3px] text-center laptop:text-sl  laptop:tracking-[0.36px] ">
      <C className="inline" /> 2021 <I className="inline mx-[3px]" />
      All Rights Reserved <I className="inline mx-[3px]" />
      Developed with <Heart className="inline mx-[3px]" /> by
      <a
        className="underline ml-[2px]"
        href="https://m.goit.global/ua/new/?utm_source=google&utm_medium=cpc&utm_campaign=AY_Search_Marathon_Brand_UA&utm_content=154975695588&utm_term=649512770761&keyword=goit&placement=&gad_source=1&gclid=CjwKCAiA6byqBhAWEiwAnGCA4MoS60L4lCUnOYAqnR8lLlOWW4ZgR0T4GTQiI4rvXwoSPTuZAkBUtxoC67IQAvD_BwE"
      >
        GoIT Students
      </a>
    </h4>
  );
};

export default Footer;
