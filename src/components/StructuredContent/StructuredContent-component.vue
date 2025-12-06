<script setup lang="ts">
import type { StructuredContent } from './StructuredContent-types';


defineProps<{
    config: StructuredContent
}>();

</script>

<template>
    <div class="w-screen flex justify-start items-center flex-col pt-[8em]">
        <div class=" max-w-3xl">
                
            <!-- General title  -->
            <h1 class="text-center mb-7">{{ config.title }}</h1>

            <span
                class=""
                v-if="config.lastUpdate"
            >Dernière mise a jours : {{ config.lastUpdate }}</span>

            <!-- Sections -->
            <div
                v-for="(section, sectionKey) in config.selection"
                :key="sectionKey"
                class="mt-6 bg-[#ffffff15] p-6 rounded-lg shadow-md"
            >
                <!-- Category title -->
                <h2 class="text-xl font-bold mb-4">{{ section.title }}</h2>

                <!-- Description paragraphs -->
                <p
                    v-for="(value, index) in section.description"
                    :key="index"
                    class="mb-2 ml-2"
                >
                    {{ value }}
                </p>

                <!-- Link text -->
                <p
                    v-if="'lien' in section && section.lien"
                    class="mb-2 ml-2"
                >
                    {{ section.lien.before }} <a class=" text-blue-400" :href="section.lien.href">{{ section.lien.value }}</a>{{ section.lien.after }}
                </p>

                <!-- Bullet list -->
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
    </div>
</template>
