<script setup lang="ts">
import SButton from '../../components/SButton.vue';
import hero_config from "../../config/hero_config.json"
</script>

<template>

    <section
        class="flex justify-center items-center flex-col pt-[15em] px-3.5

    ">

        <div class="absolute top-10 right-0 opacity-40 w-[600px] h-[200px] bg-[#512FEB]/50 rounded-full blur-[120px] -z-1"></div>

        <div
            class="max-w-4xl text-center flex justify-center items-center flex-col gap-6"
        >

            <h1 class="font-bold text-[30px] flex gap-2 md:text-[48px] xl:text-[60px]">
                {{ hero_config.title }}
            </h1>

            <div class="mb-4 max-w-lg text-[16px]
                xl:text-[18px]
            ">
                {{ hero_config.description }}
            </div>

            <SButton
                content="Nos services"
                premium
                href="#services"
            />

        </div>
    </section>
</template>
