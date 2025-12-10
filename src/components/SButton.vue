<template>
  <button
    :type="type as any"
    @click="open(href)"
    @mouseenter="onHover"
    @mouseleave="onHoverLeave"
    class="sbtn-ripple"
    :class="[
      `relative inline-flex items-center justify-center
      rounded-lg shadow-md transition-all duration-300`,
      premium ? 'premium-btn' : 'normal-btn'
    ]"
    :style="buttonStyle"
    ref="buttonEl"
  >
    <span 
      class="text-white text-center font-outfit relative z-10"
      :class="premium ? 'text-[18px] font-bold' : 'text-[14px]'"
    >
      {{ content }}
    </span>

    <span v-if="!premium && arrow" class="ml-2 inline-flex relative z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-[20px] h-[20px] arrow-icon"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import gsap from "gsap";

const router = useRouter();
const buttonEl = ref<HTMLButtonElement | null>(null);

const props = defineProps({
  content: { type: String, default: "Nos services" },
  href: { type: String, default: "#services" },
  bgColor: { type: String, default: "rgb(81, 47, 235)" },
  borderColor: { type: String, default: "rgba(255, 255, 255, 0.1)" },
  premium: { type: Boolean, default: false },
  arrow: { type: Boolean, default: true },
  type: { type: String, default: 'button' }
});

const buttonStyle = computed(() => ({
  backgroundColor: props.bgColor,
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: props.borderColor,
}));

const open = (href: string) => {
  if (href.startsWith('http')) return window.open(href);
  router.push(href);
}

const onHover = () => {
  if (!buttonEl.value) return;
  
  gsap.to(buttonEl.value, {
    scale: 1.05,
    duration: 0.3,
    ease: 'power2.out',
  });

  // Animation de l'arrow
  const arrow = buttonEl.value?.querySelector('.arrow-icon');
  if (arrow) {
    gsap.to(arrow, {
      x: 3,
      duration: 0.3,
      ease: 'power2.out',
    });
  }
};

const onHoverLeave = () => {
  if (!buttonEl.value) return;
  
  gsap.to(buttonEl.value, {
    scale: 1,
    duration: 0.3,
    ease: 'power2.out',
  });

  const arrow = buttonEl.value?.querySelector('.arrow-icon');
  if (arrow) {
    gsap.to(arrow, {
      x: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  }
};
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
}

/* Style normal */
.normal-btn {
  padding: 10px 16px;
  transform: scale(1);
}

/* Style premium + animation */
.premium-btn {
  padding: 14px 22px;
  font-size: 16px;
  box-shadow: 0 0 15px rgba(255, 223, 92, 0.6),
              0 0 40px rgba(255, 223, 92, 0.3);
  transform: scale(1.1);
  animation: pulse 1.3s infinite alternate ease-in-out;
}

/* Animation pulse */
@keyframes pulse {
  0%   { transform: scale(1.05); box-shadow: 0 0 10px var(--primary); }
  100% { transform: scale(1.17); box-shadow: 0 0 25px var(--primary); }
}
</style>
