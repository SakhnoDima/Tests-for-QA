import React from "react";

const Container = ({ children, cls = "" }) => {
  return (
    <section
      className={`
        mx-auto w-[320px] px-5 laptop:w-[768px] desktop:px-[124px] desktop:w-[100%] ${
          cls === "material"
            ? "min-w-[320px] w-[100%] bg-mob bg-no-repeat bg-right bg-cover retina:bg-mob2x laptop:bg-tab laptop:retina:bg-tab2x laptop:px-[32px] desktop:bg-desk desktop:retina:bg-desk2x desktop:px-[123px]"
            : ""
        }
  `}
    >
      {children}
    </section>
  );
};

export default Container;
