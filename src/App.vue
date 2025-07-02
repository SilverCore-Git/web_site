<script setup lang='ts'>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
</script>

<template>

  <header class="bg-white shadow-sm py-4">
    <Navbar />
  </header>

  <router-view></router-view>

  <footer>
    <Footer />
  </footer>

</template>

<style scoped>

</style>
