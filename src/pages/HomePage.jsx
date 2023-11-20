import React from "react";
import ButtonHome from "../components/ButtonHome/ButtonHome";
import HomeTitle from "../components/HomeTitle/HomeTitle";
import Container from "../components/Container";

const Home = () => {
  return (
    <Container cls="main">
      <HomeTitle />
      <ButtonHome />
    </Container>
  );
};
export default Home;
