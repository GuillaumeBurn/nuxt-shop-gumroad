<template>
  <div class="blog_container">
    <div class="blog_post">
      <div
        class="blog_post_background"
        :style="{ 'background-image': 'url(' + blogPostData.img + ')' }"
      ></div>
      <section class="titleWrapper">
        <p class="blog_post__intro">{{ blogPostData.name }}</p>
      </section>
      <main id="maincontent">
        <section id="trigger2" class="blog_post__content">
          <h1 class="blog_post__content--title">
            {{ blogPostData.name }}
          </h1>
          <p class="blog_post__content--text">
            {{ blogPostData.content }}
          </p>
        </section>
      </main>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.blog_post_background {
  position: absolute;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  filter: brightness(0.5);
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: -10;
}
.titleWrapper {
  display: flex;
  align-items: flex-end;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: -5;
}
.blog_post {
  &__intro {
    font-size: 30px;
    color: #fff;
    padding: 0 0 50px 77px;
  }
  &__content {
    padding: 120px 25% 0;
    height: 100vh;
    &--title {
      font-size: 68px;
      margin-bottom: 24px;
    }
    &--text {
      font-size: 18px;
      line-height: 32px;
    }
  }
}
@media (max-width: 1684px) {
  .blog_post {
    &__content {
      padding: 120px 15% 0;
    }
  }
}
@media (max-width: 993px) {
  .blog_post {
    &__intro {
      padding: 0 5% 50px;
    }
    &__content {
      padding: 120px 5% 0;
      &--title {
        font-size: 48px;
      }
      &--text {
        font-size: 18px;
        line-height: 32px;
      }
    }
  }
}
@media (max-width: 500px) {
  .blog_post {
    &__intro {
      font-size: 24px;
      padding: 5%;
      padding-bottom: 80px;
    }
    &__content {
      padding: 100px 5% 0;
      &--title {
        font-size: 32px;
      }
      &--text {
        font-size: 18px;
        line-height: 32px;
      }
    }
  }
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapGetters(["blogPost"]),
    blogPostData() {
      return this.blogPost.find(el => el.id === this.id);
    }
  }
};
</script>
