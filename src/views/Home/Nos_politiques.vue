<script setup lang="ts">
import home_config from '../../config/home_config.json';
import Politique_card from '../../components/Politique_card.vue';
const politiques = home_config.politiques;
</script>

<template>

    <section 
        class="flex justify-center items-center flex-col text-center pt-[13%] pb-[5em] relative"
        id="politiques"
    >

        <div class="absolute top-40 right-0 opacity-40 w-[600px] h-[200px] bg-[#512FEB]/50 rounded-full blur-[120px] -z-1"></div>

        <div 
            class="mb-10"
        >
            <h2 class="text-[28px] sm:text-[40px] md:text-[50px] font-bold">{{ politiques.title }}</h2>
            <p class="">
                {{ '' }}
            </p>
        </div>

        <div
            class="
                    flex justify-center items-center
                    flex-wrap max-w-8xl gap-4
                "
        >

            <Politique_card
                v-for="service in politiques.politique"
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