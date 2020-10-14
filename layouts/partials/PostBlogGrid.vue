<template>
  <section class="blogLayout">
    <main id="maincontent">
      <ul class="posts">
        <postItem
          v-for="post in posts"
          :key="post.id"
          :id="post.id"
          :name="post.name"
          :img="post.img"
          :svgPlaceholder="post.svgPlaceholder"
        />
      </ul>
    </main>
  </section>
</template>
<style lang="scss" scoped>
.blogLayout {
  display: grid;
  grid-template-areas:
    "nav nav"
    "main main";
}
nav {
  grid-area: nav;
}
#maincontent {
  grid-area: main;
}
.posts {
  display: grid;
  grid-area: main;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 100px;
  padding: 0 150px;
  list-style-type: none;
}
@media (max-width: 845px) {
  .posts {
    padding: 0 34px;
  }
}
@media (max-width: 634px) {
  .posts {
    padding: 0 12px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 50px;
  }
}
</style>
<script>
import PostItem from "@/components/PostItem";

export default {
  props: {
    data: {
      required: true
    }
  },
  data() {
    return {};
  },
  components: {
    PostItem
  },
  computed: {
    posts() {
      return this.data;
    }
  }
};
</script>
