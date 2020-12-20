<template>
  <transition @enter="enter">
    <span :key="`${$i18n.locale}-${text}`" class="mainNav__link hover__link">
      {{ text }}
    </span>
  </transition>
</template>
<script>
import anime from "animejs";

export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    enter(el) {
      // this.obj = new Letterize({
      //   targets: el,
      //   className: "letter"
      // });
      // anime.timeline().add({
      //   targets: el,
      //   translateY: [200, 0],
      //   translateZ: 0,
      //   opacity: [0, 1],
      //   easing: "easeOutExpo",
      //   duration: 2000,
      //   delay: (el, i) => 1000 + 50 * i
      // });
    }
  },
  mounted() {
    const el = this.$el;
    this.obj = new Letterize({
      targets: el,
      className: "letter"
    });
    anime.timeline().add({
      targets: el,
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 200,
      delay: (el, i) => 50 * i
    });
  }
};
</script>
