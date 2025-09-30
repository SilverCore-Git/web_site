<template>

    <article>

        <div 
            class="container lg:mx-auto max-w-4xl pb-10 rounded-3xl
            text-center card-shadow-second bg-white space-y-10"
        >

            <h2 
                class="text-4xl uppercase font-bold rounded-t-3xl
                bg-[var(--second)] text-gray-900 py-10"
                style="text-shadow: 1px 1px 2px var(--primary);"
            >{{ article.title }}</h2>

            <p 
                class="text-lg text-gray-700 px-10"
            >
                {{ article.content }}
            </p>

            <div
                class="grid gap-8 px-20"
                :class="article.sections.length > 1 
                            ? article.sections.length == 3  ? ''
                                                            :'grid-cols-1 sm:grid-cols-2' 
                            : 'grid-cols-1'
                        "
            >

                <div
                    v-for="section in article.sections"
                    class="space-y-2"
                >

                    <h3 
                        class="text-3xl font-semibold"
                        style="text-shadow: 1px 1px 2px var(--second);"    
                    >
                        {{ section.title }}
                    </h3>

                    <p>
                        {{ section.content }}
                    </p>

                </div>


            </div>


        </div>

    </article>

</template>

<script lang="ts" setup>
import type { Article } from '../assets/config/type';

defineProps<{
    article: Article;
}>();

</script>