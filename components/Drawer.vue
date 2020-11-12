<template>
  <div class="sidenav-container">
    <div
      class="burger-menu interactive-element"
      id="burgerMenu"
      role="button"
      @click="$store.dispatch('nav/toggleSidebar')"
    ></div>
    <div v-if="isSidebar" class="backdrop" @click="hideSidebar"></div>
    <transition name="slide-side">
      <div v-if="isSidebar" class="sidenav">
        <Nav />
      </div>
    </transition>
  </div>
</template>
<style lang="scss">
.sidenav-container {
  height: 100%;
  width: 100%;
}
.sidenav {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  padding: 30px;
  height: 100%;
  width: 700px;
  z-index: 102;
  span {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .mainNav {
    &__list {
      display: flex;
      flex-direction: column;
      padding: 0;
      list-style-type: none;
    }
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1.5rem 0;
      min-width: 140px;
    }
    &__link {
      display: flex;
      color: #000;
      text-decoration: none;
      font-size: 32px;
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
#burgerMenu {
  transform: translate3d(0, 0, 0);
  opacity: 1;
  height: 50px;
  width: 50px;
  top: 24px;
  right: 24px;
  position: fixed;
  z-index: 103;
}
.slide-side-enter-active {
  transition: all 1s cubic-bezier(0.07, 0.68, 0.09, 1);
}
.slide-side-leave-active {
  transition: all 1s cubic-bezier(0.88, 0.01, 0.35, 1);
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(100%);
}
.backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(244, 245, 246, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
}
</style>
<script>
import { mapGetters } from "vuex";
import Nav from "@/layouts/partials/nav";
import lottie from "@/plugins/lottie";
import burgerMenu from "~/static/animation/menu.json";
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
    Nav
  },
  methods: {
    hideSidebar() {
      this.$store.dispatch("nav/toggleSidebar");
    }
  },
  computed: {
    isSidebar() {
      return this.$store.getters["nav/toggleSidebar"];
    }
  },
  mounted() {
    const container = document.querySelector(".sidenav-container");
    const params = {
      container: document.getElementById("burgerMenu"),
      renderer: "svg",
      path: "",
      loop: false,
      autoplay: false,
      animationData: burgerMenu
    };
    var anim;
    anim = lottie.loadAnimation(params);

    $("#burgerMenu").click(function() {
      if (container.classList.contains("active") !== true) {
        anim.setDirection(1);
        anim.play();
        container.classList.add("active");
        $(this).removeClass("dark");
      } else if (container.classList.contains("active")) {
        anim.setDirection(-1);
        anim.play();
        container.classList.remove("active");
      }
    });
  }
};
</script>
