<template>
  <div class="pageWrapper">
    <ProductGrid :data="uiKit" />
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
    ...mapGetters(["uiKit"])
  }
};
</script>
