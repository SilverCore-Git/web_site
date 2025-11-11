<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import contenue_HeroSection from './components/contenue_Hero section.vue';
import Nos_service from './components/nos_services/Nos_service.vue';
</script>

<template>
  <!-- <div class="w-screen h-screen overflow-x-hidden parent_Hero_scetion
              flex flex-col justify-center items-center"></div> -->

  <div class="background_purple w-screen h-screen">
      <Navbar/>
      <contenue_HeroSection />
      <Nos_service/>
  </div>

</template>

<style>

.background_purple {
  background: linear-gradient(to bottom, rgba(81, 47, 235, 0.5), #000000);
}
</style>
