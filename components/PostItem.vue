<template>
  <li>
    <nuxt-link
      class="post"
      :to="'/blog/' + id"
      :aria-label="'link to the article ' + name"
    >
      <article>
        <div class="post__imgWrapper">
          <div class="post__placeholder" v-html="svgPlaceholder"></div>
          <img
            class="post__thumbnail"
            :src="img"
            :alt="'Image of the blog post ' + name"
          />
        </div>
        <h1 class="post__title">{{ name }}</h1>
      </article>
    </nuxt-link>
  </li>
</template>
<style lang="scss" scoped>
.post {
  box-sizing: border-box;
  color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  padding: 12px;

  .post__thumbnail.isLoaded {
    opacity: 1;
  }
  article {
    width: 100%;
  }
  &__imgWrapper {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
  }

  &__thumbnail {
    position: absolute;
    top: 0;
    opacity: 0;
    transition: 2s;
    width: 100%;
    border-radius: 12px;
  }
  &__info {
    margin-top: 12px;
  }
  &__title {
    margin-top: 12px;
    font-size: 30px;
    color: #000;
  }
  &__price {
    font-size: 18px;
    color: #000;
  }
}
</style>
<script>
export default {
  props: {
    id: {
      type: String
    },
    img: {
      type: String
    },
    svgPlaceholder: {
      type: String
    },
    name: {
      type: String,
      default: "poulet"
    }
  }
};
</script>
