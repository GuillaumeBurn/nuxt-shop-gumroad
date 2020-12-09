<template>
  <div class="pageWrapper">
    <PostBlogGrid :data="blogPost" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import PostBlogGrid from "@/layouts/partials/PostBlogGrid";

export default {
  components: {
    PostBlogGrid
  },
  computed: {
    ...mapGetters(["blogPost"])
  }
};
</script>
