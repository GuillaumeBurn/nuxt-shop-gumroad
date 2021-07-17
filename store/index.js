import * as Filters from "~/helpers/filters";
import blogPost from "~/static/store/blog-post/blog-post.json";

export const state = () => {
  return {
    products: [],
    filteredProducts: [],
    product: {},
    blogPost: blogPost.data,
    locale: "en",
    filter: {
      search: "",
      order: "1",
      pricerange: 100,
      min: 0,
      max: 100,
      category: ""
    }
  };
};
// Getters are like computed properties but for Vuex
export const getters = {
  product: state => state.product,
  getProduct: state => state.product,
  getProducts: state => state.products,
  getCategory: state => state.filter.category,
  getSearch: state => state.filter.search,
  getOrder: state => state.filter.order,
  getPricerange: state => state.filter.pricerange,
  apparels: state =>
    state.products.filter(el => el.custom_summary === "Apparels"),
  freebies: state =>
    state.products.filter(el => el.custom_summary === "Freebies"),
  getFilteredProducts(state) {
    return state.filteredProducts;
  },
  blogPost: state => state.blogPost
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
  SET_FILTERED_PRODUCTS(state, products) {
    state.filteredProducts = products;
  },
  SET_FILTER_PRICE(state, price) {
    state.filter.pricerange = price;
  },
  SET_FILTER_SEARCH(state, search) {
    state.filter.search = search;
  },
  CLEAR_PRODUCTS(state) {
    state.products = [];
  },
  FILTER_PRODUCTS(state) {
    const products = [...state.products];
    state.filteredProducts = Filters.filterProducts(state.filter, products);
  },
  SET_ORDER(state, order) {
    state.filter.order = order;
  },
  SET_CATEGORY(state, category) {
    state.filter.category = category;
  },
  ORDER_PRODUCTS(state) {
    const products = [...state.filteredProducts];
    state.filteredProducts = Filters.orderProducts(
      state.filter.order,
      products
    );
  },
  SET_LANG(state, locale) {
    state.locale = locale;
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
  async setFilteredProducts({ commit }, products) {
    await commit("SET_FILTERED_PRODUCTS", products);
  },
  async sendEmail({ state, commit }, payload) {
    let emailInfo = payload;
    try {
      const token = await this.$recaptcha.execute('sendEmail');
      const { res } = await this.$axios.post("/api/contact", {
        token,
        emailInfo
      });
      alert("Message send successfully");
    } catch (e) {
      alert(e);
    }
  },
  async filterOrder({ commit, dispatch }, order) {
    await commit("SET_ORDER", order);
    dispatch("filterProducts");
  },
  async filterCategory({ commit, dispatch }, category) {
    await commit("SET_CATEGORY", category);
    dispatch("filterProducts");
  },
  async filterPrice({ commit, dispatch }, price) {
    await commit("SET_FILTER_PRICE", price);
    dispatch("filterProducts");
  },
  async filterSearch({ commit, dispatch }, search) {
    await commit("SET_FILTER_SEARCH", search);
    dispatch("filterProducts");
  },
  async filterProducts({ commit }) {
    await commit("FILTER_PRODUCTS");
    await commit("ORDER_PRODUCTS");
  },
  async clearProducts({ commit }) {
    await commit("CLEAR_PRODUCTS");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
