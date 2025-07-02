<template>

    <div class="bg-white p-8 rounded-xl card-shadow flex flex-col items-center text-center">

        <img :src="`/assets/img/${img}.png`" class="w-30 rounded-2xl mb-6 icon-color">

        <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ title }}</h3>

        <p class="text-lg text-gray-700 mb-6">{{ description }}</p>

        <ul class="text-gray-600 text-left w-full max-w-sm mx-auto mb-6 space-y-2">

            <li 
                v-for="(adventage, index) in adventages"
                :key="index"
                class="flex items-center"
            >
                <span class="text-green-500 mr-2">✔</span> 
                {{ adventage }}
            </li>

        </ul>

        <a 
            :href="link" 
            target="_blank"
            class="btn-primary text-white font-bold py-2 px-6 rounded-full inline-block text-md mt-auto"
        >
            Découvrir {{ title }}
        </a>

    </div>

</template>

<script lang="ts" setup>

defineProps<{
    title: string;
    img: string;
    description: string;
    adventages: string[];
    link: string;
}>();

</script>