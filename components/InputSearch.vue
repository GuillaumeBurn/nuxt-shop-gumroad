<template>
  <div class="search">
    <svg
      class="search__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38.276 38.574"
    >
      <path
        d="M37.144,32.237l-8-8a15.8,15.8,0,1,0-5.276,5.137l8.07,8.07C35.384,40.885,40.591,35.683,37.144,32.237ZM4.9,15.8A10.9,10.9,0,1,1,15.8,26.7,10.914,10.914,0,0,1,4.9,15.8Z"
        fill="#4f5760"
      />
    </svg>
    <input
      id="input-value"
      class="search__input"
      type="search"
      :value="data"
      @input="handleSearch($event)"
    />
  </div>
</template>
<style lang="scss">
.search {
  display: flex;
  align-items: center;
  &__icon {
    margin: 0 16px 0 24px;
    height: 24px;
    width: 24px;
  }
  &__input {
    background-color: #fff;
    display: flex;
    border: 0;
    border-radius: 0 18px 18px 0;
    padding: 0;
    min-height: 58px;
    min-width: 250px;
    font-size: 21px;
    &:focus {
      outline: 0;
    }
    &::placeholder {
      padding-top: 12px;
    }
  }
}
</style>
<script>
export default {
  props: {
    data: {
      type: String
    },
  },
  methods: {
    handleSearch(e) {
      this.$emit('changeValue', e.target.value);
    },
  }
};
</script>
