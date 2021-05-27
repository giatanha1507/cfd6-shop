import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import {
  AddressAC,
  AddressList,
  HeaderAccount,
  OrderDetails,
  OrderList,
  Payment,
  PaymentEdit,
  Personal,
  SideBar,
  WishList,
} from "./component";

export function Account() {
  let { path } = useRouteMatch();
  let { login } = useSelector((store) => store.auth);

  if (!login) {
    return <Redirect to="/auth" />;
  }
  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <HeaderAccount />
        <div className="row">
          <SideBar />
          <Switch>
            <Route path={`${path}/order`} component={OrderList} />
            <Route path={`${path}/order-detail`} component={OrderDetails} />
            <Route path={`${path}/wishlist`} component={WishList} />
            <Route path={`${path}/address`} component={AddressList} />
            <Route path={`${path}/address-edit`} component={AddressAC} />
            <Route path={`${path}/payment`} component={Payment} />
            <Route path={`${path}/payment-edit`} component={PaymentEdit} />
            <Route path={`${path}`} exact component={Personal} />
          </Switch>
        </div>
      </div>
    </section>
  );
}
