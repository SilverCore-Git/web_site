<script setup lang="ts">
  
import { useRoute } from 'vue-router';
import blog_config from '../config/blog_config.json';
import { computed, onMounted } from 'vue';
import gsap from 'gsap';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

const route = useRoute();
const slug = route.params.slug as string;

const article = computed(() => {
  return blog_config.blog.articles.find((a: any) => a.slug == slug);
});

const relatedArticles = computed(() => {
  if (!article.value) return [];
  return blog_config.blog.articles
    .filter((a: any) => a.category === article.value.category && a.id !== article.value?.id)
    .slice(0, 3);
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

onMounted(() => {
  gsap.fromTo(
    '.article-hero',
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }
  );
});

</script>

<template>

  <div 
    v-if="article"
    class="min-h-screen pb-20"
  >

    <section class="article-hero pt-32 px-4 relative overflow-hidden max-w-4xl mx-auto">

      <div class="mb-6">

        <div class="flex items-center gap-4 mb-4">
          <span class="px-3 py-1 bg-[#512FEB]/30 text-[#8B5CF6] rounded-full text-sm font-semibold">
            {{ article.category }}
          </span>
          <span class="text-white/60">{{ formatDate(article.date) }}</span>
        </div>
        
        <h1 class="text-[40px] md:text-[56px] font-bold mb-6">
          {{ article.title }}
        </h1>

        <div class="flex items-center gap-4">
          <div>
            <p class="font-semibold">{{ article.author }}</p>
            <p class="text-white/60 text-sm">Publié le {{ formatDate(article.date) }}</p>
          </div>
        </div>

      </div>

      <div class="rounded-xl overflow-hidden h-96 mb-12">
        <img 
          v-if="article.image != 'none'"
          :src="article.image"
          :alt="article.title"
          class="w-full h-full object-cover"
        />
        <img
          v-else
          src="../assets/img/file.svg"
          class="w-full h-full object-contain invert-50"
        />
      </div>
      
    </section>

    <section class="max-w-4xl mx-auto px-4 mb-20 relative ">
 
      <div class="prose prose-invert max-w-none">
        <p 
          class="text-lg text-white/80 leading-relaxed whitespace-pre-wrap"
          v-html="md.render(article.content)"
        ></p>
      </div>

      <div class="mt-16 pt-8 border-t border-white/10">

        <!-- <p class="text-white/70 mb-4">Partager cet article :</p>
        <div class="flex gap-4">
          <a href="#" class="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition">
            <i class="bi bi-twitter text-white" />
          </a>
          <a href="#" class="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition">
            <i class="bi bi-facebook text-white" />
          </a>
          <a href="#" class="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition">
            <i class="bi bi-linkedin text-white" />
          </a>
        </div> -->

      </div>

    </section>

    <section 
      v-if="relatedArticles.length > 0" 
      class="max-w-6xl mx-auto px-4 py-16"
    >

      <h2 class="text-[32px] font-bold mb-12">Articles Similaires</h2>
      
      <div class="grid md:grid-cols-3 gap-8">

        <div
          v-for="related in relatedArticles"
          :key="related.id"
          class="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
        >
          <div class="h-40 overflow-hidden">
            <img 
              v-if="related.image != 'none'"
              :src="related.image"
              :alt="related.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <img 
              v-else
              src="../assets/img/file.svg"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div class="p-6">

            <p class="text-white/60 text-sm mb-2">{{ related.category }}</p>
            <h3 class="font-bold mb-3 group-hover:text-[#8B5CF6] transition-colors">
              {{ related.title }}
            </h3>
            
            <router-link 
              :to="`/blog/${related.slug}`"
              class="text-[#512FEB] hover:text-[#8B5CF6] transition-colors text-sm font-semibold"
            >
              Lire →
            </router-link>

          </div>

        </div>

      </div>

    </section>

  </div>

  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-4">Article non trouvé</h1>
      <router-link to="/blog" class="text-[#512FEB] hover:text-[#8B5CF6]">
        ← Retour au blog
      </router-link>
    </div>
  </div>
  
</template>
