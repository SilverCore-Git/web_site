<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import contenue_HeroSection from './components/contenue_Hero section.vue';
import Nos_service from './components/Nos_service.vue';
</script>

<template>
  <div class="parent_Hero_section center direction_column ">
      <Navbar/>
      <contenue_HeroSection/>
  </div>
  <div>
    <Nos_service/>
  </div>
</template>

<style>
body {
  height: 100%;
  width: 100%;
  background-color: black;
}
#app {
  height: 100%;
  width: 100%;
  padding: 0;
}

.parent_Hero_section {
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, rgba(81, 47, 235, 0.5), #000000);
}
</style>
