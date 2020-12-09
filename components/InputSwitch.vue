<template>
  <div class="switch-wrapper">
    <nuxt-link class="switch__label" :to="'/fr/' + page_path">Fr</nuxt-link>
    <label class="switch">
      <input @click="switchState" class="lang-switch" type="checkbox" />
      <span class="slider round"></span>
    </label>
    <nuxt-link class="switch__label" :to="'/en/' + page_path">En</nuxt-link>
  </div>
</template>
<style lang="scss" scoped>
.switch-wrapper {
  display: flex;
  align-items: center;
}
.switch {
  position: relative;
  display: flex;
  width: 60px;
  height: 34px;
  &__label {
    text-decoration: none;
    color: $white-1;
    margin-right: 12px;
    &:last-of-type {
      margin-left: 12px;
    }
    &.nuxt-link-exact-active {
      color: $primary-color;
    }
  }
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $primary-color;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: $primary-color;
}

input:focus + .slider {
  box-shadow: 0 0 1px $primary-color;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
<script>
export default {
  data() {
    return {
      page_path: this.$route.name.replace("lang-", "")
    };
  },
  mounted() {
    if (this.$i18n.locale === "en") {
      $(".lang-switch").prop("checked", true);
    } else if (this.$i18n.locale === "fr") {
      $(".lang-switch").prop("checked", false);
    }
  },
  methods: {
    switchState() {
      let pageRoute = this.$route.name.replace("lang-", "");
      if (this.$i18n.locale === "en") {
        $(".lang-switch").prop("checked", true);
        this.$router.push({ path: `/fr/${pageRoute}` });
      } else if (this.$i18n.locale === "fr") {
        $(".lang-switch").prop("checked", false);
        this.$router.push({ path: `/en/${pageRoute}` });
      }
    }
  }
};
</script>
