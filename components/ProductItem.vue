<template>
  <li>
    <nuxt-link class="product" :to="'/shop/' + id">
      <article>
        <!--       <div class="thumbnail" :style="{backgroundImage: 'url('+ preview_url +')'}"></div> -->
        <img class="product__thumbnail" :src="preview_url" :alt="name" />
        <div>
          <h1 class="product__title">{{ name }}</h1>
          <p class="product__price">{{ formatted_price }}</p>
        </div>
      </article>
    </nuxt-link>
  </li>
</template>
<script>
export default {
  props: {
    id: {
      type: String
    },
    preview_url: {
      type: String
    },
    name: {
      type: String,
      default: "poulet"
    },
    formatted_price: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  text-decoration: none;
  color: #000;

  &__thumbnail {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    border-radius: 16px;
    width: 100%;
  }
}
</style>
