<template>
  <form>
    <fieldset>
      <div
        :class="'inputField' + '--' + input.styling"
        v-for="input in inputs"
        :key="input.idName"
      >
        <label class="inputField__label" :for="input.name">{{
          input.labelTitle
        }}</label>
        <input
          class="inputField__input"
          :id="input.idName"
          :name="input.name"
          :placeholder="input.placeHolder"
          :type="input.type"
          v-model="input.dataBinding"
        />
      </div>
    </fieldset>
    <fieldset>
      <div
        :class="'inputArea' + '--' + content.styling"
        v-for="content in area"
        :key="content.name"
      >
        <label class="inputArea__label" :for="content.name">{{
          content.labelTitle
        }}</label>
        <textarea
          class="inputArea__area"
          :id="content.name"
          v-model="content.dataBinding"
          maxlength="250"
        ></textarea>
      </div>
    </fieldset>
    <button type="button" value="Send" @click="sendEmail()">Submit</button>
  </form>
</template>
<style lang="scss">
.contact-form {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  form {
    width: 70%;
  }
  fieldset {
    border: none;
    padding: 0;
  }
  button {
    padding: 16px 64px;
    background-color: black;
    border: 0;
    color: white;
    font-size: 18px;
    float: right;
    margin-top: 32px;
  }
}
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
  data() {
    return {
      inputs: [
        {
          name: "fullname",
          idName: "fullname",
          labelTitle: "Full name",
          placeHolder: "Your Name",
          styling: "underline",
          dataBinding: ""
        },
        {
          name: "email",
          idName: "email",
          labelTitle: "Email*",
          placeHolder: "Email Address",
          styling: "underline",
          type: "email",
          dataBinding: ""
        }
      ],
      area: [
        {
          name: "projectdescription",
          labelTitle: "Project Details",
          dataBinding: "",
          styling: "outline"
        }
      ]
    };
  },
  methods: {
    sendEmail() {
      if(this.inputs[1].dataBinding !== ''){
        const emailData = {
          email: this.inputs[1].dataBinding,
          name: this.inputs[0].dataBinding,
          message: this.area[0].dataBinding
        };
        this.$store.dispatch("sendEmail", emailData);
        this.inputs[1].dataBinding = "";
        this.inputs[0].dataBinding = "";
        this.area[0].dataBinding = "";
      } else {
        alert("Please enter email address");
      }
    }
  }
};
</script>
