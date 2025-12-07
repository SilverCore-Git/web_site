<template>
  <div class="scroll-wrapper h-full w-full" ref="scrollWrapper">
    <div class="scroll-content h-full w-full" ref="scrollContent">
        <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scrollWrapper = ref<HTMLElement | null>(null);
const scrollContent = ref<HTMLElement | null>(null);

onMounted(() => {
    if (!scrollWrapper.value || !scrollContent.value) return;

    const updateHeight = () => {
      scrollWrapper.value!.style.height = scrollContent.value!.scrollHeight + 'px';
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    let current = 0;
    let target = 0;
    const ease = 0.15;

    const animate = () => {
      target = window.scrollY;
      current += (target - current) * ease;

      scrollContent.value!.style.transform = `translateY(${-current}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    // Effet parallaxe sur le scroll
    document.addEventListener('scroll', () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      
      // Animation douce du background starry au scroll
      const starryBg = document.querySelector('.starry-bg') as HTMLElement;
      if (starryBg) {
        gsap.to(starryBg, {
          backgroundPosition: `${scrollPercent * 100}% ${scrollPercent * 100}%`,
          duration: 0.5,
          ease: 'none',
        });
      }
    });
});
</script>

<style scoped>
body {
  margin: 0;
  overflow-x: hidden;
}

.scroll-wrapper {
  position: relative;
  width: 100%;
}

.scroll-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  will-change: transform;
}
</style>
