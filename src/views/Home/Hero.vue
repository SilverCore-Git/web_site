<script setup lang="ts">
import SButton from '../../components/SButton.vue';
import hero_config from "../../config/hero_config.json"
</script>

<template>
    <section
        class="flex justify-center items-center flex-col pt-[15em] px-3.5

    ">
    <!-- pt-[13%] -->
        <div
            class="max-w-5xl text-center flex justify-center items-center flex-col gap-6"
        >

            <div class="font-bold text-[30px]
                md:text-[48px]
                xl:text-[60px]
            ">
                {{ hero_config.title }}
                <!-- text-[60px] -->
            </div>

            <div class="mb-4 max-w-lg text-[16px]
                xl:text-[18px]
            ">
                {{ hero_config.description }}
            </div>

            <SButton
                content="Nos services"
            />

        </div>
    </section>
</template>

<style scoped></style>