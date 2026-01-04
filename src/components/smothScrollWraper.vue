<template>
  <div class="scroll-wrapper h-full w-full" ref="scrollWrapper">
    <div class="scroll-content h-full w-full" ref="scrollContent">
        <slot />
    </div>
  </div>
</template>

<!-- <script lang="ts" setup>

import { ref, onMounted, onUnmounted } from 'vue';
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
    
    let resizeTimeout: number;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateHeight, 150);
    };
    window.addEventListener('resize', debouncedResize);

    let current = 0;
    let target = 0;
    const ease = 0.15;
    let rafId: number;

    let maxScroll = 0;
    const updateMaxScroll = () => {
      maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    };

    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);

    const animate = () => {
      target = window.scrollY;
      current += (target - current) * ease;

      if (Math.abs(target - current) < 0.1) {
        current = target;
      }

      scrollContent.value!.style.transform = `translate3d(0, ${-current}px, 0)`;

      rafId = requestAnimationFrame(animate);
    };

    animate();

    let ticking = false;
    const starryBg = document.querySelector('.starry-bg') as HTMLElement;
    
    const updateParallax = () => {
      if (!ticking && starryBg && maxScroll > 0) {
        requestAnimationFrame(() => {
          const scrollPercent = window.scrollY / maxScroll;
          starryBg.style.transform = `translate3d(${scrollPercent * 300}px, ${scrollPercent * 300}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener('scroll', updateParallax, { passive: true });

    // Cleanup
    onUnmounted(() => {
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('resize', updateMaxScroll);
      document.removeEventListener('scroll', updateParallax);
      cancelAnimationFrame(rafId);
    });
});

</script> -->
<!-- 
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
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
}

:deep(.starry-bg) {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

</style> -->