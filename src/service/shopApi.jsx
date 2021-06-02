const shopApi = {
  shopProduct() {
    return fetch("http://cfd-reactjs.herokuapp.com/product", {}).then((res) =>
      res.json()
    );
  },
};
export default shopApi;
