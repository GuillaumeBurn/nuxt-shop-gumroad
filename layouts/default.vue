<template>
  <div
    :class="{
      'dark-theme': hasDark,
      'light-theme': !hasDark,
      'blog-post': isBlogPost,
      fr: french
    }"
  >
    <Header />
    <Drawer />
    <nuxt />
  </div>
</template>
<script>
import Header from "./partials/header";
import Drawer from "@/components/Drawer";
export default {
  components: {
    Header,
    Drawer
  },
  data() {
    return {
      hasDark: false,
      isBlogPost: false,
      french: false
    };
  },
  created() {
    this.routeChanged();
  },
  computed: {
    isSidebar() {
      return this.$store.getters["nav/toggleSidebar"];
    }
  },
  watch: {
    $route: function() {
      this.$store.dispatch("nav/toggleSidebar");
    },
    $route: "routeChanged"
  },
  methods: {
    routeChanged() {
      this.hasDark = this.$route.path === `/${this.$i18n.locale}/contact`;
      this.isBlogPost =
        this.$route.path ===
        `/${this.$i18n.locale}/blog/${this.$route.params.id}`;
      this.french = this.$i18n.locale === `fr`;
    }
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
