<script setup lang="ts">
import mentions_legales_config from "../../config/mentions_legales_config.json";
</script>

<template>
    <div class="pt-[8em]">
        <h1>{{ mentions_legales_config.title }}</h1>
        <div
            v-for="(section, sectionKey) in mentions_legales_config.selection"
            :key="sectionKey"
            class="mt-8"
        >
            <h2 class="text-xl font-bold mb-4">{{ section.title }}</h2>
            <p
                v-for="(value, index) in section.description"
                :key="index"
                class="mb-2"
            >
                {{ value }}
            </p>

            <p
                v-if="'lien' in section && section.lien"
                class="mb-2"
            >
                {{ section.lien.text }} <a :href="section.lien.href">{{ section.lien.value }}</a>
            </p>

            <ul
                v-if="'liste' in section && section.liste"
                class="mb-2 list-disc pl-5"
            >
                <li v-for="(item, index) in section.liste" :key="index">
                    {{ item }}
                </li>
            </ul>

        </div>
    </div>
</template>
