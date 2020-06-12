<template>
  <ProductGrid :data="products" />
</template>
<script>
import { mapState } from "vuex";
import ProductGrid from "@/layouts/partials/ProductGrid";
export default {
  head() {
    return {
      title: "Klarr Shop",
      meta: [
        {
          name: "description",
          content: "You can buy icons, templates and all kind of design stuff"
        },
        { name: "keywords", content: "" }
      ]
    };
  },
  components: {
    ProductGrid
  },
  middleware: "products",
  computed: {
    ...mapState(["products"])
  }
};
</script>
