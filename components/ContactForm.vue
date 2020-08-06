<template>
  <form @submit="sendEmail">
    <fieldset>
      <inputField
        v-for="input in inputs"
        :key="input.idName"
        :idName="input.idName"
        :name="input.name"
        :labelTitle="input.labelTitle"
        :placeHolder="input.placeHolder"
        :styling="input.styling"
        :type="input.type"
        :v-model="input.dataBinding"
      />
    </fieldset>
    <fieldset>
      <InputArea
        v-for="content in area"
        :key="content.name"
        :name="content.name"
        :labelTitle="content.labelTitle"
        :v-model="content.dataBinding"
      />
    </fieldset>
    <button type="submit" value="Send">Submit</button>
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
          dataBinding: "nameBinding"
        },
        {
          name: "email",
          idName: "email",
          labelTitle: "Email*",
          placeHolder: "Email Address",
          styling: "underline",
          type: "email",
          dataBinding: "emailBinding"
        }
      ],
      area: [
        {
          name: "projectdescription",
          labelTitle: "Project Details",
          dataBinding: "messageBinding"
        }
      ],
      nameBinding: "",
      emailBinding: "",
      messageBinding: ""
    };
  },
  methods: {
    sendEmail() {
      const emailData = {
        email: this.emailBinding,
        name: this.nameBinding,
        message: this.messageBinding
      };
      this.$store.dispatch("sendEmail", emailData);
      this.nameBinding = "";
      this.emailBinding = "";
      this.messageBinding = "";
      console.log(emailData);
    }
  },
  components: {
    InputField,
    InputArea
  }
};
</script>
