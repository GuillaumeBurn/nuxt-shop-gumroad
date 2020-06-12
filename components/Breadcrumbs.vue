<template>
  <div class="breadcrumbs">
    <p>Shop /</p>
    <h2>
      {{ page_path }}
    </h2>
  </div>
</template>
<style lang="scss" scoped>
.breadcrumbs {
  padding-left: 12px;
  width: 130px;
  h2 {
    margin-bottom: 12px;
    font-size: 28px;
    font-weight: 800;
    text-transform: capitalize;
  }
  p {
    margin-bottom: 4px;
  }
}
</style>
<script>
export default {
  props: ["name"],
  data() {
    if (this.$route.name === "shop") {
      return {
        page_path: "All Products"
      };
    } else {
      return {
        page_path: this.$route.name.replace("shop-", "")
      };
    }
  }
};
</script>
