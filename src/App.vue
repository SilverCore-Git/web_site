<script setup lang="ts">
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import Router from './Router.vue';
</script>

<template>

  <div class="background_purple w-screen h-screen">
      <Navbar/>
      <Router />
      <Footer />
  </div>

</template>

<style>

.background_purple {
  background: linear-gradient(to bottom, rgba(81, 47, 235, 0.5), #000000);
}
</style>
