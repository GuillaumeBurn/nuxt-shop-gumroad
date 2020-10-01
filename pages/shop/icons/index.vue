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
    handleProductsByCategory() {
      this.$store.dispatch('setFilteredProductsByCategory', 'Icons');
    }
  },
  mounted() {
    this.handleProductsByCategory();
  }
};
</script>
