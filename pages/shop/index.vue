<template>
  <ProductGrid />
</template>
<script>
import { mapGetters } from "vuex";
import ProductGrid from "@/layouts/partials/ProductGrid";
export default {
  head() {
    return {
      title: "Shop",
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
  methods: {
    handleCategory() {
      this.$store.dispatch("filterCategory", "");
    },
  },
  mounted() {
    this.handleCategory();
  }
};
</script>
