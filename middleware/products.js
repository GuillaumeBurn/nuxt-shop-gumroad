export default async function({ store, $axios, params }) {
  $axios.setHeader(
    "AUTHORIZATION",
    "Bearer 4c3213a4bf4b963dcbd02fda2962d5b4fa804133b76f4853c2964067bac23dca"
  );
  // All products
  $axios.setHeader(
    "AUTHORIZATION",
    "Bearer 4c3213a4bf4b963dcbd02fda2962d5b4fa804133b76f4853c2964067bac23dca"
  );
  const productsObj = await $axios.$get("api/products");
  console.log(productsObj);
  store.dispatch("setProducts", productsObj.products);
}
