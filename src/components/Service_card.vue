<template>

    <div
        class="
            service_card flex justify-start 
            items-start text-start flex-col p-6
        "
    >

        <div class="flex flex-row gap-3">
            <img :src="prop.logo" class="rounded-lg w-[35px] h-[35px]" />
            <span>{{ prop.name }}</span>
        </div>

        <h3>{{ prop.title }}</h3>
        <p>
            {{ prop.description }}
        </p>

        <button>
            {{ prop.btn.content }}
        </button>

        <img :src="prop.baner" />

    </div>

</template>

<script lang="ts" setup>

import type { Service } from '../assets/ts/types';
defineProps<{
    prop: Service
}>();

</script>

<style scoped>

.service_card {
    background-color: rgba(255, 255, 255, 0.06);

    min-height: 500px;
    width: 540px;

    border: 1.5px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

</style>