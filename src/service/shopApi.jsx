const shopApi = {
  shopProduct(str) {
    return fetch(`http://cfd-reactjs.herokuapp.com/product?${str}`).then(
      (res) => res.json()
    );
  },

  shopCategory() {
    return fetch("http://cfd-reactjs.herokuapp.com/categories", {}).then(
      (res) => res.json()
    );
  },
  products(slug) {
    return fetch(`http://cfd-reactjs.herokuapp.com/product?slug=${slug}`).then(
      (res) => res.json()
    );
  },
};
export default shopApi;
