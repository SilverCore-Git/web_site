<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="starry-bg fixed inset-0 z-0 "></div>
  <div class="w-screen h-screen">
      <Navbar />
      <router-view />
  </div>
</template>

<style>

.starry-bg {
  background: #000;
  background-image:
    radial-gradient(2px 2px at 20px 30px, white, transparent),
    radial-gradient(1.5px 1.5px at 80px 120px, white, transparent),
    radial-gradient(2px 2px at 200px 50px, white, transparent),
    radial-gradient(1.5px 1.5px at 300px 100px, white, transparent),
    radial-gradient(1.8px 1.8px at 150px 200px, white, transparent);
  background-size: 400px 400px;
}


</style>
