import React from "react";
import Container from "../components/Container";
import { literature, resources } from "../constant/constant";
import MaterialCard from "../components/MaterialCard/MaterialCard";

const MaterialPAge = () => {
  return (
    <Container cls={"material"}>
      <div className="pt-[62px] laptop:pt-[182px] desktop:pt-[100px]">
        <MaterialCard title="Useful literature" list={literature} />
        <MaterialCard title="Useful resources" list={resources} isLink />
      </div>
    </Container>
  );
};

export default MaterialPAge;
