<template>
  <div :class="'inputField' + '--' + styling">
    <label class="inputField__label" :for="name">{{ labelTitle }}</label>
    <input
      class="inputField__input"
      :id="idName"
      :name="name"
      :placeholder="placeHolder"
      :type="type"
      :v-model="dataBinding"
    />
  </div>
</template>
<style lang="scss" scoped>
.inputField {
  $self: &;
  &--underline {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    #{ $self }__label {
      color: black;
      font-size: 21px;
    }
    #{ $self }__input {
      border: 0;
      border-bottom: 3px solid black;
      background-color: transparent;
      color: black;
      font-size: 16px;
      margin-bottom: 32px;
      height: 45px;
      &:focus {
        outline: none;
      }
      &::placeholder {
        font-size: 16px;
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
    idName: {
      type: String
    },
    labelTitle: {
      type: String
    },
    placeHolder: {
      type: String
    },
    styling: {
      type: String,
      default: "underline",
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
    },
    type: {
      type: String,
      default: "text",
      validator: function(value) {
        // List of input type
        return (
          ["text", "number", "checkbox", "password", "email", "search"].indexOf(
            value
          ) !== -1
        );
      }
    },
    dataBinding: {
      type: String
    }
  }
};
</script>
