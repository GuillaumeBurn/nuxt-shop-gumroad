<template>
  <header>
    <div id="skiptocontent">
      <a href="#maincontent">skip to main content</a>
    </div>
    <logo />
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
  </header>
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
header {
  display: flex;
  justify-content: space-between;
  //  font-family: $muli;
  padding: 20px;
  #skiptocontent {
    position: absolute;
    width: 200px;
    top: 0;
  }
  #skiptocontent a {
    padding: 6px;
    position: absolute;
    top: -40px;
    left: 0px;
    color: white;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    border-bottom-right-radius: 8px;
    background: #bf1722;
    -webkit-transition: top 1s ease-out;
    transition: top 1s ease-out;
    z-index: 100;
    &:focus {
      position: absolute;
      left: 0px;
      top: 0px;
      outline-color: transparent;
      -webkit-transition: top 0.1s ease-in;
      transition: top 0.1s ease-in;
    }
  }
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
}
</style>
