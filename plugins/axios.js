export default function({ $axios, redirect }) {
  $axios.setHeader(
    "AUTHORIZATION",
    "Bearer 4c3213a4bf4b963dcbd02fda2962d5b4fa804133b76f4853c2964067bac23dca"
  );
  $axios.onRequest(config => {
    console.log("Making request to " + config.url);
  });
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/400");
    }
  });
}
