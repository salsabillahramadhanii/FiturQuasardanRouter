<template>
  <q-page class="contact-page q-pa-md text-center">
    <h2 class="q-mb-lg">Contact Us</h2>
    <p class="text-body1 q-mb-md">If you have any questions, feel free to contact us.</p>
    <p class="text-body1 q-mb-md">Email: <a href="mailto:info@gorgaming.com">salsabila02018@gmail.com</a></p>
    <p class="text-body1">Phone: +62 857-6520-0160</p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactPage'
});
</script>

<style lang="scss" scoped>
.contact-page {
  max-width: 800px;
  margin: 40px auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  padding: 40px;
}
</style>