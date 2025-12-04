<script setup lang="ts">
import SButton from '../../components/SButton.vue';
import TextWriter from '../../components/textWriter.vue';
import hero_config from "../../config/hero_config.json"
</script>

<template>
    <section
        class="flex justify-center items-center flex-col pt-[15em] px-3.5

    ">
    <!-- pt-[13%] -->
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
