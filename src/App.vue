<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import contenue_HeroSection from './components/contenue_Hero section.vue';
import Nos_service from './components/Nos_service.vue';
</script>

<template>
  <div class="w-screen h-screen overflow-x-hidden parent_Hero_scetion
              flex flex-col justify-center items-center">
    <div class="w-screen h-screen background_purple ">
      <Navbar/>
      <contenue_HeroSection />
      <Nos_service/>
    </div>
  </div>
</template>

<style>

.background_purple {
  background: linear-gradient(to bottom, rgba(81, 47, 235, 0.5), #000000);
}
</style>
