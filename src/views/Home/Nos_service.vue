<script setup lang="ts">
import Service_card from '@/components/Service_card.vue';
import home_config from '../../config/home_config.json';
import TextWriter from '../../components/textWriter.vue';
const services = home_config.services;
</script>

<template>

    <section 
        class="flex justify-center items-center flex-col text-center pt-[13%]"
        id="services"
    >

        <div 
            class="mb-10"
        >
            <h2 class="min-w-xl text-[28px] flex justify-center items-center gap-2 sm:text-[40px] md:text-[50px] font-bold">
                {{ services.title.text }}
                <TextWriter
                    :words="services.title.keyWords"
                />
            </h2>
            <p class="">
                {{ services.description }}
            </p>
        </div>

        <div
            class="
                    flex justify-center items-center
                    flex-wrap max-w-6xl gap-4 
                "
        >

            <Service_card
                v-for="service in services.services"
                :prop="service"
            />

        </div>

    </section>

</template>

<style scoped>
.parent_nos_service {
    height: 100%;
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
}
</style>