export default async function({ store, $axios, params }) {
  // All products
  const productsObj = await $axios.$get("api/products");
  console.log(productsObj);
  store.dispatch("setProducts", productsObj.products);
  //Single product
  const productObj = await $axios.$get(`api/products/${params.id}`);
  store.dispatch("setProduct", productObj.product);
}
