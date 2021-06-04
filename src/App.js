import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux";
import "./asset/css/custom.css";
import routerConfig from "./core/routerConfig";
import routers from "./routers";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>{routerConfig(routers)}</BrowserRouter>
    </Provider>
  );
}

export default App;
