export const state = () => {
  return {
    products: [],
    product: {}
  };
};
// Getters are like computed properties but for Vuex
export const getters = {
  product: state => state.product,
  apparels: state =>
    state.products.filter(el => el.custom_summary === "Apparels"),
  freebies: state =>
    state.products.filter(el => el.custom_summary === "Freebies"),
  icons: state => state.products.filter(el => el.custom_summary === "Icons"),
  mockups: state =>
    state.products.filter(el => el.custom_summary === "Mockups"),
  uiKit: state => state.products.filter(el => el.custom_summary === "Ui Kit")
};
/* 
    Actions are generally used to send request to a server.
    Usualt Actions resolve into some data.
*/

export const actions = {
  /* All products */
  setProducts({ commit }, products) {
    commit("SET_PRODUCTS", products);
  },
  /* Single product */
  setProduct({ commit }, product) {
    commit("SET_PRODUCT", product);
  }
};
/* 
    Mutations are simple function that have access to a state.
    Mutations are used to assign values to a state.
*/
export const mutations = {
  /* State and posts arguments are receive from commit */
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
