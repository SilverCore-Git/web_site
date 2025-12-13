<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="starry-bg fixed inset-0 -z-2 "></div>
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
    radial-gradient(2px 2px at 200px 50px, white, transparent),
    radial-gradient(2.2px 2.2px at 450px 150px, white, transparent),
    radial-gradient(1.8px 1.8px at 680px 280px, white, transparent),
    radial-gradient(2px 2px at 850px 80px, white, transparent),
    radial-gradient(2.3px 2.3px at 320px 420px, white, transparent),
    radial-gradient(1.9px 1.9px at 580px 620px, white, transparent),
    radial-gradient(2.1px 2.1px at 120px 780px, white, transparent),
    radial-gradient(2px 2px at 750px 850px, white, transparent),
    radial-gradient(2.2px 2.2px at 920px 520px, white, transparent),
    
    radial-gradient(1.5px 1.5px at 80px 120px, white, transparent),
    radial-gradient(1.5px 1.5px at 300px 100px, white, transparent),
    radial-gradient(1.6px 1.6px at 520px 320px, white, transparent),
    radial-gradient(1.4px 1.4px at 740px 180px, white, transparent),
    radial-gradient(1.5px 1.5px at 900px 400px, white, transparent),
    radial-gradient(1.7px 1.7px at 180px 580px, white, transparent),
    radial-gradient(1.5px 1.5px at 420px 720px, white, transparent),
    radial-gradient(1.6px 1.6px at 650px 880px, white, transparent),
    radial-gradient(1.5px 1.5px at 820px 700px, white, transparent),
    radial-gradient(1.4px 1.4px at 380px 940px, white, transparent),
    radial-gradient(1.5px 1.5px at 540px 480px, white, transparent),
    radial-gradient(1.6px 1.6px at 260px 360px, white, transparent),
    
    radial-gradient(1px 1px at 150px 200px, white, transparent),
    radial-gradient(1px 1px at 350px 250px, white, transparent),
    radial-gradient(1.1px 1.1px at 480px 120px, white, transparent),
    radial-gradient(1px 1px at 620px 380px, white, transparent),
    radial-gradient(1.2px 1.2px at 780px 560px, white, transparent),
    radial-gradient(1px 1px at 880px 240px, white, transparent),
    radial-gradient(1.1px 1.1px at 140px 460px, white, transparent),
    radial-gradient(1px 1px at 320px 640px, white, transparent),
    radial-gradient(1.2px 1.2px at 580px 760px, white, transparent),
    radial-gradient(1px 1px at 720px 920px, white, transparent),
    radial-gradient(1.1px 1.1px at 860px 680px, white, transparent),
    radial-gradient(1px 1px at 220px 820px, white, transparent),
    radial-gradient(1.2px 1.2px at 460px 540px, white, transparent),
    radial-gradient(1px 1px at 640px 220px, white, transparent),
    radial-gradient(1.1px 1.1px at 940px 860px, white, transparent),
    
    radial-gradient(0.8px 0.8px at 90px 90px, rgba(255,255,255,0.8), transparent),
    radial-gradient(0.7px 0.7px at 240px 180px, rgba(255,255,255,0.7), transparent),
    radial-gradient(0.8px 0.8px at 410px 280px, rgba(255,255,255,0.8), transparent),
    radial-gradient(0.7px 0.7px at 560px 140px, rgba(255,255,255,0.7), transparent),
    radial-gradient(0.9px 0.9px at 690px 460px, rgba(255,255,255,0.8), transparent),
    radial-gradient(0.7px 0.7px at 830px 340px, rgba(255,255,255,0.7), transparent),
    radial-gradient(0.8px 0.8px at 950px 180px, rgba(255,255,255,0.8), transparent),
    radial-gradient(0.7px 0.7px at 110px 520px, rgba(255,255,255,0.7), transparent),
    radial-gradient(0.8px 0.8px at 290px 680px, rgba(255,255,255,0.8), transparent),
    radial-gradient(0.9px 0.9px at 490px 820px, rgba(255,255,255,0.8), transparent),
    radial-gradient(0.7px 0.7px at 610px 960px, rgba(255,255,255,0.7), transparent),
    radial-gradient(0.8px 0.8px at 770px 740px, rgba(255,255,255,0.8), transparent),
    radial-gradient(0.7px 0.7px at 890px 920px, rgba(255,255,255,0.7), transparent),
    radial-gradient(0.9px 0.9px at 340px 380px, rgba(255,255,255,0.8), transparent),
    radial-gradient(0.8px 0.8px at 510px 600px, rgba(255,255,255,0.8), transparent);
    
  background-size: 400px 400px;
  background-repeat: repeat;
}


</style>
