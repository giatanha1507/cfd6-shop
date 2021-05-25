import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import store from "./redux";
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
import "./asset/css/custom.css";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/auth" component={Auth} />
            <Route path="/checkout" component={CheckboxItem} />
            <Route path="/coming-soon" component={ComingSoon} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/faq" component={FAQ} />
            <Route path="/order-complete/:slug" component={OrderComplete} />
            <Route path="/product/:slug" component={ProductDetail} />
            <Route path="/store-locator" component={StoreLocator} />
            <Route path="/shop" component={Shop} />
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route path="/account" component={Account} />
            <Route
              path="/shipping-and-returns"
              component={ShippingAndReturns}
            />
            <Route path="" component={NotFound} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
