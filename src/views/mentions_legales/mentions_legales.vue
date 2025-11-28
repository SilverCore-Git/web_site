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
                {{ section.lien.before }} <a class=" text-blue-400" :href="section.lien.href">{{ section.lien.value }}</a>{{ section.lien.after }}
            </p>

            <ul
                v-if="'liste' in section && section.liste"
                class="mb-2 list-disc pl-5"
            >
                <p v-if="section.liste.before" v-for="(item, index) in section.liste.before" :key="'before-' + index">
                    {{ item }}
                </p>

                <li v-for="(item, index) in section.liste.puce" :key="index">
                    {{ item }}
                </li>

                <p v-if="section.liste.after" v-for="(item, index) in section.liste.after" :key="'after-' + index">
                    {{ item }}
                </p>
            </ul>

        </div>
    </div>
</template>
