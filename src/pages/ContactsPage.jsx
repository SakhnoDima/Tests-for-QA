import React from "react";
import Line from "../components/Line/Line";
import Container from "../components/Container";
import CommandCard from "../components/CommandCard/CommandCard";

const ContactsPage = () => {
  return (
    <Container>
      <div className=" w-[100%] pt-[42px] pb-[58px]">
        <h2 className="text-center text-ms font-bold tracking-[0.36px] laptop:text-ml laptop:tracking-[0.44px]">
          Our team
        </h2>
        <Line cls={"contact"} />
        <CommandCard />
      </div>
    </Container>
  );
};

export default ContactsPage;
