<template>

    <div
        class="
            service_card h-[380px] max-w-85 md:w-100 backdrop-blur-2xl
        "
    >

        <div
            class="
                flex justify-start gap-5.5 p-6 max-w-85
                items-start text-start flex-col md:w-100
            "
        >

            <i class=" bg-[rgba(255,255,255,0.2)] rounded-[7px] p-2.5 bi" :class="prop.icon"></i>

            <h3 class="text-[22px] font-bold">{{ prop.title }}</h3>

            <p class="text-[16px]">
                {{ prop.content }}
            </p>

        </div>

    </div>

</template>

<script lang="ts" setup>

import type { Politique } from '../assets/ts/types';
defineProps<{
    prop: Politique
}>();

</script>

<style scoped>

.service_card {
    background-color: rgba(255, 255, 255, 0.06);
    border: 1.5px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

</style>