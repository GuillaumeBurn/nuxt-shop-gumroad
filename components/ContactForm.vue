<template>
  <form>
    <fieldset v-for="input in inputs">
        <InputField :labelTitle="input.labelTitle" :id="input.idName" :name="input.name" :placeholder="input.placeHolder" :type="input.type" v-on:changeValue="input.method($event)" />
    </fieldset>
    <fieldset v-for="content in area">
        <InputArea :labelTitle="content.labelTitle" :name="content.name" v-on:changeValue="content.method($event)" />
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
import InputField from "@/components/InputField";
import InputArea from "@/components/InputArea";
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
          data: "",
          method: function(e) {
            this.data = e;
          },
        },
        {
          name: "email",
          idName: "email",
          labelTitle: "Email*",
          placeHolder: "Email Address",
          styling: "underline",
          type: "email",
          data: "",
          method: function(e) {
            this.data = e;
          }
        },
      ],
      area: [
        {
          name: "projectdescription",
          labelTitle: "Project Details",
          styling: "outline",
          data: "",
          method: function(e) {
            this.data = e;
          }
        },
      ],
    };
  },
  components: {
    InputField,
    InputArea,
  },
  methods: {
    sendEmail() {
      if (this.inputs[1].data !== "") {
        const emailData = {
          email: this.inputs[1].data,
          name: this.inputs[0].data,
          message: this.area[0].data,
        };
        this.$store.dispatch("sendEmail", emailData);
        this.inputs[1].data = "";
        this.inputs[0].data = "";
        this.area[0].data = "";
      } else {
        alert("Please enter email address");
      }
    },
  },
};
</script>
