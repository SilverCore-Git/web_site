<script setup lang="ts">
import type { StructuredContent } from './StructuredContent-types';
import Footer from '../Footer.vue';
import SmothScrollWraper from '../smothScrollWraper.vue';

defineProps<{
    config: StructuredContent
}>();

</script>

<template>

    <SmothScrollWraper>

        <div class="w-screen flex justify-start items-center flex-col my-[8em]">

            <div class=" max-w-3xl">
                    
                <!-- General title  -->
                <h1 class="text-center mb-7 font-bold">{{ config.title }}</h1>

                <span
                    class=""
                    v-if="config.lastUpdate"
                >Dernière mise a jours : {{ config.lastUpdate }}</span>

                <!-- Sections -->
                <div
                    v-for="(section, sectionKey) in config.selection"
                    :key="sectionKey"
                    class="mt-6 bg-[#ffffff27] p-6 rounded-lg shadow-md backdrop-blur-xs"
                >
                    <!-- Category title -->
                    <h3 class="text-xl font-bold mb-4">{{ section.title }}</h3>

                    <!-- Description paragraphs -->
                    <p
                        v-for="(value, index) in section.description"
                        :key="index"
                        class="mb-2 ml-2"
                    >
                        {{ value }}
                    </p>

                    <!-- Link text -->
                    <p v-if="section.lien" class="mb-2 ml-2 text-base">
                        {{ section.lien.before }}
                        <a :href="section.lien.href" class="text-blue-400 hover:underline">
                            {{ section.lien.value }}
                        </a>
                        {{ section.lien.after }}
                    </p>

                    <!-- Bullet list -->
                    <div v-if="section.liste" class="mb-2">
                        
                        <!-- Texte avant la liste -->
                        <p v-if="section.liste.before" class="mb-1 text-base">
                            <span v-for="(item, index) in section.liste.before" :key="'before-' + index">
                            {{ item }}
                            </span>
                        </p>

                        <!-- La liste principale -->
                        <ul class="list-disc pl-5 mb-1">
                            <li v-for="(item, index) in section.liste.puce" :key="'puce-' + index" class="mb-1">
                            {{ item }}
                            </li>
                        </ul>

                        <!-- Texte après la liste -->
                        <p v-if="section.liste.after" class="mt-1 text-base">
                            <span v-for="(item, index) in section.liste.after" :key="'after-' + index">
                            {{ item }}
                            </span>
                        </p>

                    </div>

                </div>

            </div>
        </div>

        <Footer />

    </SmothScrollWraper>

</template>
