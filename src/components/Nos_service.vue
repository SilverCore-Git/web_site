<script setup lang="ts">
import Service_card from './Service_card.vue';
import home_config from '../config/home_config.json';
const services = home_config.services;
</script>

<template>

    <section 
        class="flex justify-center items-center flex-col text-center"
    >

        <div 
            class="mb-10"
        >
            <h2 class="text-[50px] font-bold">{{ services.title }}</h2>
            <p class="">
                {{ services.description }}
            </p>
        </div>

        <div
            class="
                    flex justify-center items-center
                    flex-wrap max-w-8xl gap-4
                "
        >

            <Service_card
                v-for="service in services.services"
                :prop="service"
            />

        </div>

    </section>

</template>

<style>
.parent_nos_service {
    height: 100%;
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
}

.espace_10 {
    height: 10px;
}

.espace_25 {
    height: 25px;
}

.espace_60 {
    height: 60px;
}

.espace_width_15 {
    width: 15px;
}

.espace_15 {
    height: 15px;
}

.top {
    width: 100%;
}
</style>