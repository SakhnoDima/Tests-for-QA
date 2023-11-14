import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { useAllSelectors } from "../hooks/useAllSelectors";
import Button from "../components/ButtonHome/Button";
import ButtonOrigin from "../components/ButtonOrigin/ButtonOrigin";
import { ReactComponent as Arrow } from "../images/svg/arrowLong.svg";

const TestPage = () => {
  const [index, setIndex] = useState(0);
  const { tests } = useAllSelectors();

  return (
    <>
      <div className="mt-[28px] mb-[18px] flex justify-between items-center ">
        <p className=" w-[68px] text-s font-normal tracking-[0.28px]">
          {tests[0]?.test === "tech"
            ? "[ QA technical training ]"
            : "[ Testing  theory _ ]"}
        </p>
        <Button testsBtn={true}>
          <p className="text-white-color text-sm not-italic font-normal tracking-[0.2px]">
            Finish test
          </p>
        </Button>
      </div>
      <div className="bg-white-color drop-shadow-form-shadow px-[20px] py-[40px]">
        <p className="text-[#555] uppercase text-center mb-[20px] text-sm font-normal tracking-[0.2px]">
          question <span className="text-active-color">{index + 1}</span> /{" "}
          <span>{tests.length}</span>
        </p>
        <p className="mb-[32px] text-center text-sl font-bold leading-[18px] tracking-[0.24px]">
          {tests[index]?.question}
        </p>
        <span className="mb-[32px] block w-[130px] h-[1px] mx-auto bg-[#00122F]/10 "></span>
        <Formik
          initialValues={{
            answer: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form>
              {tests[index]?.answers?.map((item) => (
                <label key={item}>
                  <Field type="radio" name="answer" value={item} />
                  {item}
                </label>
              ))}

              <div className=" flex justify-between items-center">
                <ButtonOrigin
                  type={"submit"}
                  name="decrement"
                  disabled={index === 0}
                  onClick={() => {
                    setIndex((prev) => prev - 1);
                  }}
                >
                  <Arrow className="rotate-180" />
                </ButtonOrigin>
                <ButtonOrigin
                  type={"submit"}
                  name="increment"
                  disabled={index === 11}
                  onClick={() => {
                    setIndex((prev) => prev + 1);
                  }}
                >
                  <Arrow />
                </ButtonOrigin>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default TestPage;
