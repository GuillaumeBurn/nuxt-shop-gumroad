export default async function({ store, $axios, params }) {
  $axios.setHeader(
    "AUTHORIZATION",
    "Bearer 4c3213a4bf4b963dcbd02fda2962d5b4fa804133b76f4853c2964067bac23dca"
  );
  //Single product
  const productObj = await $axios.$get(`api/products/${params.id}`);
  store.dispatch("setProduct", productObj.product);
}