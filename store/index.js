export const state = () => {
  return {
    products: [],
    product: {},
    emailProvider: {
      username: "alberta71@ethereal.email",
      password: "BJgwmJJetZMDqstnwX"
    }
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
  uiKit: state => state.products.filter(el => el.custom_summary === "Ui Kit"),
  emailProvider(state) {
    return state.emailProvider;
  }
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
  },
  async sendEmail({ state, commit }, payload) {
    let emailInfo = payload;
    let emailProvider = state.emailProvider;
    if (emailProvider.username !== "" && emailProvider.password !== "") {
      try {
        const { res } = await this.$axios.post("/api/contact", {
          emailInfo,
          emailProvider
        });
        alert("Message send successfully");
      } catch (e) {
        alert(e);
      }
    }
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
  },
  setNewEmailProvider(state, payload) {
    state.emailProvider = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
