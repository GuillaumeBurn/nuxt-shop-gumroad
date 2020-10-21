<template>
  <div :class="'inputArea' + '--' + styling">
    <label class="inputArea__label" :for="name">{{ labelTitle }}</label>
    <textarea
      class="inputArea__area"
      :id="name"
      maxlength="250"
      @input="changeValue($event)"
    ></textarea>
  </div>
</template>
<style lang="scss" scoped>
.inputArea {
  $self: &;
  &--outline {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    #{ $self }__label {
      color: black;
      font-size: 21px;
      margin-bottom: 12px;
    }
    #{ $self }__area {
      background-color: transparent;
      border: 3px solid black;
      color: black;
      font-size: 16px;
      min-height: 200px;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
<script>
export default {
  props: {
    name: {
      type: String
    },
    labelTitle: {
      type: String
    },
    styling: {
      type: String,
      default: "outline",
      validator: function(value) {
        // List of input style
        return (
          [
            "underline",
            "outline",
            "underline_disabled",
            "outline_disabled"
          ].indexOf(value) !== -1
        );
      }
    }
  },
  methods: {
    changeValue(e) {
      this.$emit('changeValue', e.target.value);
    }
  }
};
</script>
