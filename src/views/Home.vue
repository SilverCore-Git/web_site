<template>

    <div v-if="isHome" >
        <Contenue_HeroSection />
        <Nos_service />
    </div>

</template>

<script lang="ts" setup>
import Contenue_HeroSection from '../components/contenue_Hero section.vue';
import Nos_service from '../components/nos_services/Nos_service.vue';


const isHome = true;

</script>