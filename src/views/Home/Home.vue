<template>
    
    <SmothScrollWraper>
        <Hero />
        <Nos_service />
        <Nos_politiques class="mb-20" />
        <Footer />
    </SmothScrollWraper>

</template>

<script lang="ts" setup>
import Nos_service from './Nos_service.vue';
import Hero from './Hero.vue';
import Nos_politiques from './Nos_politiques.vue';
import SmothScrollWraper from '../../components/smothScrollWraper.vue';
import Footer from '../../components/Footer.vue';


</script>