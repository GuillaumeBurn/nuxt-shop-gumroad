<template>
  <div>
    <main id="maincontent">
      <div class="section-wrapper">
        <section class="social-content"></section>
        <section class="contact-form">
          <ContactForm />
        </section>
      </div>
    </main>
  </div>
</template>
<script>
import ContactForm from "@/components/ContactForm";

export default {
  components: {
    ContactForm
  }
};
</script>
