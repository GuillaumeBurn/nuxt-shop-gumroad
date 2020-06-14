<template>
  <section class="product-detail">
    <img
      class="product-detail__img"
      :src="product.preview_url"
      :alt="product.name"
    />
    <section class="info-section">
      <h1 class="product-detail__title">{{ product.name }}</h1>
      <section v-html="product.description"></section>
      <p>{{ product.formatted_price }}</p>
      <a class="button" :href="product.short_url + '?wanted=true'">
        Buy it now
      </a>
    </section>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  middleware: "products",
  computed: {
    ...mapGetters(["product"])
  }
};
</script>
<style lang="scss" scoped>
.product-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 90px;
  &__img {
    width: 100%;
  }
  &__title {
    font-size: 38px;
    font-weight: 900;
    margin-bottom: 16px;
  }
}
.not {
  display: none;
}

.info-section {
  display: flex;
  flex-direction: column;
  padding-left: 90px;
  .button {
    background-color: black;
    padding: 12px 20px;
    margin-top: 24px;
    text-decoration: none;
    color: white;
    border-radius: 30px;
    width: fit-content;
  }
}
</style>
