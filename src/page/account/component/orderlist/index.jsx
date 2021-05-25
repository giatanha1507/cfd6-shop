import React from "react";
import { Paging } from "../../../../component";
import { OrderItem } from "./component";

export function OrderList() {
  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <Paging />
    </div>
  );
}
