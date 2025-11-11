<script setup lang="ts">
import Service_card from './Service_card.vue';

const services: { title: string }[] = [
    {
        title: "test"
    },
    {
        title: "test2"
    },
    {
        title: "test3"
    }
]

</script>

<template>

    <section 
        class="parent_nos_service align-items_center direction_column"
    >

        <div class="header_nos_service center direction_column">
            <div class="Badge center">Service</div>
            <div class="espace_25"></div>
            <div class="Heading_2 text-align_center">Nos Service</div>
            <div class="espace_10"></div>
            <div class="Body_M text-align_center">Tailored solutions to streamline, innovate, and grow.</div>
        </div>

        <div
            class="
                    flex flex-wrap max-w-8xl justify-center items-center gap-4
                "
        >

            <Service_card
                v-for="service in services"
                :title="service.title"
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