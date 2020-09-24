<template>
  <div class="pageWrapper">
    <ProductGrid :data="icons" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ProductGrid from "@/layouts/partials/ProductGrid";
export default {
  components: {
    ProductGrid
  },

  computed: {
    ...mapGetters(["icons"])
  }
};
</script>
