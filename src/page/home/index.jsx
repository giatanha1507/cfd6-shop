import React from "react";
import { Promote } from "../../component";
import {
  BestPicks,
  Brands,
  Categories,
  CountDown,
  Features,
  Reviews,
  TopSellers,
} from "./component";

export function Home() {
  return (
    <>
      <Promote />
      <Categories />
      <Features />
      <BestPicks />
      <TopSellers />
      <CountDown />
      <Reviews />
      <Brands />
    </>
  );
}
