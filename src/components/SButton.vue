<template>
  <a
    @click="open(href)"
    :class="[
      `relative inline-flex items-center justify-center
      rounded-lg shadow-md transition-all duration-300`,
      premium ? 'premium-btn' : 'normal-btn'
    ]"
    :style="buttonStyle"
  >
    <span 
      class="text-white text-center font-outfit"
      :class="premium ? 'text-[18px] font-bold' : 'text-[14px]'"
    >
      {{ content }}
    </span>

    <span v-if="!premium" class="ml-2 inline-flex">
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
        class="w-[20px] h-[20px]"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </span>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  content: { type: String, default: "Nos services" },
  href: { type: String, default: "#services" },
  bgColor: { type: String, default: "rgb(81, 47, 235)" },
  borderColor: { type: String, default: "rgba(255, 255, 255, 0.1)" },
  premium: { type: Boolean, default: false }
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
