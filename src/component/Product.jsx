import React from "react";
import Cardcom from "./Cardcom";
import FooterCom from "./FooterCom";
import NavbarCom from "./NavbarCom";
import { useGetProductsQuery } from "../cart/api";
export default function Product() {
  const { data, isError, isLoading } = useGetProductsQuery();
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <NavbarCom />
      {data?.map((product) => {
        return (
          <Cardcom
            title={product.name}
            cost={product.price}
            image={product.image}
            id={product._id}
          />
        );
      })}

      {/* <Cardcom title="baby bed red " cost="55$" />
      <Cardcom title=" baby nest babay " cost="30$" />
      <Cardcom title="nest bed " cost="25$" />
      <Cardcom title="gray nest bed " cost="38$" />
      <Cardcom title="pinky " cost="75$" />
      <Cardcom title="blue bed" cost="15$" />
      <Cardcom title="baby bed " cost="60$" />
      <Cardcom title="baby bed " cost="60$" />
      <Cardcom title="baby bed " cost="60$" />
      <FooterCom /> */}
    </div>
  );
}
