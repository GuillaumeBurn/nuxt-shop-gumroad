<template>
  <nav class="mainNav">
    <ul class="mainNav__list">
      <li class="mainNav__item">
        <nuxt-link class="mainNav__link hover__link" to="/">
          Home
        </nuxt-link>
      </li>
      <li class="mainNav__item">
        <nuxt-link class="mainNav__link hover__link" to="/shop">
          Shop
        </nuxt-link>
      </li>
      <li class="mainNav__item">
        <nuxt-link class="mainNav__link hover__link" to="/blog">
          Blog
        </nuxt-link>
      </li>
      <li class="mainNav__item">
        <nuxt-link class="mainNav__link hover__link" to="/about">
          About
        </nuxt-link>
      </li>
      <li class="mainNav__item">
        <nuxt-link class="mainNav__link hover__link" to="/contact">
          Contact
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  head() {
    return {
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
        }
      ]
    };
  },
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
.mainNav {
  &__list {
    display: flex;
    list-style-type: none;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 140px;
  }
  &__link {
    display: flex;
    color: #000;
    padding: 1rem;
    text-decoration: none;
    font-size: 18px;
    transform: scale(1);
    &:hover {
      font-weight: 800;
      transform: scale(1.2);
    }
  }
  .nuxt-link-exact-active {
    font-weight: 800;
    transform: scale(1.2);
    &:hover {
      transform: scale(1);
    }
  }
}
</style>
