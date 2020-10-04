<template>
  <div class="pageWrapper">
    <ProductGrid />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ProductGrid from "@/layouts/partials/ProductGrid";
export default {
  components: {
    ProductGrid
  },
  methods: {
    handleCategory() {
      this.$store.dispatch("filterCategory", "Ui Kit");
    },
  },
  mounted() {
    this.handleCategory();
  }
};
</script>
