<template>
    
    <SmothScrollWraper>
        <Hero />
        <Nos_service />
        <Nos_politiques />
        <FAQ />
        <ContactForm />
        <Footer />
    </SmothScrollWraper>

</template>

<script lang="ts" setup>
import Nos_service from './Nos_service.vue';
import Hero from './Hero.vue';
import Nos_politiques from './Nos_politiques.vue';
import SmothScrollWraper from '../../components/smothScrollWraper.vue';
import ContactForm from '../../components/contactForm.vue';
import Footer from '../../components/Footer.vue';
import FAQ from '../../components/FAQ.vue';
</script>