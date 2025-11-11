<template>

    <div
        class="service_card flex justify-start items-start text-start"
    >


        <h1>{{ title }}</h1>

    </div>

</template>

<script lang="ts" setup>
import type { Button } from '../assets/ts/types';


defineProps<{
    name: string;
    logo: string;
    title: string;
    description: string;
    btn: Button;
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