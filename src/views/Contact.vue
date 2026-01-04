<script setup lang="ts">
import ContactForm from '../components/contactForm.vue';
import Footer from '../components/Footer.vue';
import SmothScrollWraper from '../components/smothScrollWraper.vue';

</script>

<template>
    <SmothScrollWraper>
        <ContactForm class="mt-40" />
        <Footer />
    </SmothScrollWraper>
</template>