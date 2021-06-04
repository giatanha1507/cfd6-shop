import {
  Home,
  NotFound,
  About,
  Auth,
  CheckboxItem,
  ComingSoon,
  ContactUs,
  FAQ,
  OrderComplete,
  ProductDetail,
  ShippingAndReturns,
  StoreLocator,
  Shop,
  ShoppingCart,
  Account,
} from "./page";
import { MainLayout } from "./layout/MainLayout";
import { OrderDetails, OrderList, Personal } from "./page/account/component";

let routers = [
  {
    component: ComingSoon,
    path: "/coming-soon",
  },
  {
    component: MainLayout,
    path: "/",
    routers: [
      {
        component: Home,
        path: "",
        exact: true,
      },
      {
        component: About,
        path: "/about",
      },
      {
        component: Shop,
        path: "/shop",
      },
      {
        component: Auth,
        path: "/auth",
      },
      {
        component: Account,
        path: "/account",
        auth: true,
        routers: [
          {
            component: OrderList,
            path: "order",
            exact: true,
          },
          {
            component: OrderDetails,
            path: "order/detail",
          },
          { component: Personal },
        ],
      },
    ],
  },

  //   <Switch>
  //     <Route path={`${path}/order`} exact component={OrderList} />
  //     <Route path={`${path}/order/detail`} component={OrderDetails} />
  //     <Route path={`${path}/wishlist`} component={WishList} />
  //     <Route path={`${path}/address`} component={AddressList} />
  //     <Route path={`${path}/address-edit`} component={AddressAC} />
  //     <Route path={`${path}/payment`} component={Payment} />
  //     <Route path={`${path}/payment-edit`} component={PaymentEdit} />
  //     <Route path={`${path}`} component={Personal} />
  //   </Switch>,
];

export default routers;
