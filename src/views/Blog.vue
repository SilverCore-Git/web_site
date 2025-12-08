<template>
        
    <div class="min-h-screen pb-20">
        
        <!-- hero -->
        <section class="pt-32 px-4 relative overflow-hidden">

            <div class="absolute top-0 left-0 opacity-20 w-[600px] h-[200px] bg-[#512FEB]/30 rounded-full blur-[120px] -z-1"></div>
            
            <div class="max-w-6xl mx-auto text-center">
                <h1 class="blog-hero-title text-[32px] sm:text-[48px] md:text-[56px] font-bold mb-6">
                    {{  blog_config.blog.title }}
                </h1>
                <p class="text-white/70 text-lg max-w-2xl mx-auto">
                    {{  blog_config.blog.description }}
                </p>
            </div>

        </section>

        <!-- last article -->
        <section 
            class="max-w-6xl mx-auto px-4 mt-20 mb-20 "
        >

            <div 
                @click="router.push(`/blog/${articles[0]?.slug}`)"
                class="
                    blog-card featured-card rounded-xl overflow-hidden 
                    border border-white/10 bg-gradient-to-br 
                    from-[#512FEB]/20 to-transparent backdrop-blur-lg
                    cursor-pointer
                "
            >

                <div class="grid md:grid-cols-2 gap-8 p-8">
                        
                    <div class="rounded-lg overflow-hidden h-80 md:h-auto">
                        <img 
                            :src="articles[0]?.image"
                            :alt="articles[0]?.title"
                            class="w-full h-full object-cover"
                        />
                    </div>

                    <div class="flex flex-col justify-center">

                        <div class="flex items-center gap-4 mb-4">

                            <span class="px-3 py-1 bg-[#512FEB]/30 text-[#8B5CF6] rounded-full text-sm font-semibold">
                                {{ articles[0]?.category }}
                            </span>
                            <span class="text-white/60 text-sm">
                                {{ formatDate(articles[0]?.date || '') }}
                            </span>

                        </div>
                        
                        <h2 class="text-[28px] font-bold mb-4">
                            {{ articles[0]?.title }}
                        </h2>
                        <p class="text-white/70 mb-6">
                            {{ articles[0]?.excerpt }}
                        </p>
                        
                        <div class="flex items-center gap-4">
                            
                            <span class="text-white/60">
                                Par {{ articles[0]?.author }}
                            </span>

                            <button 
                                @click="router.push(`/blog/${articles[0]?.slug}`)"
                                class="inline-flex items-center text-[#512FEB] hover:text-[#8B5CF6] transition-colors"
                            >
                                Lire l'article →
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        <!-- other's article -->
        <section
            class="max-w-6xl mx-auto px-4 mb-20"
        >

            <h2 class="text-[32px] font-bold mb-12">Articles Récents</h2>
            
            <div class="blog-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div
                    v-for="article in articles.slice(1)"
                    :key="article.id"
                    @click="router.push(`/blog/${article.slug}`)"
                    class="
                        blog-card group rounded-xl overflow-hidden border 
                        border-white/10 bg-white/5 hover:bg-white/10 
                        transition-all duration-300 backdrop-blur-lg flex flex-col
                        cursor-pointer
                    "
                >
                    
                    <div class="h-48 overflow-hidden">
                        <img 
                            :src="article.image"
                            :alt="article.title"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>

                    
                    <div class="p-6 flex flex-col flex-1">

                        <div class="flex items-center justify-between mb-3">
                        
                            <span class="px-2 py-1 bg-white/10 text-white/60 rounded text-xs font-semibold">
                                {{ article.category }}
                            </span>
                            <span class="text-white/50 text-xs">
                                {{ formatDate(article.date) }}
                            </span>

                        </div>

                        <h3 class="text-lg font-bold mb-2 group-hover:text-[#8B5CF6] transition-colors">
                            {{ article.title }}
                        </h3>

                        <p class="text-white/70 text-sm mb-4 flex-1">
                            {{ article.excerpt }}
                        </p>

                        <div class="flex items-center justify-between pt-4 border-t border-white/10">
                            <span class="text-white/60 text-xs">{{ article.author }}</span>
                            <button 
                                @click="router.push(`/blog/${article.slug}`)"
                                class="text-[#512FEB] hover:text-[#8B5CF6] transition-colors text-sm font-semibold"
                            >
                                →
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </section>

        <section 
            class="
                max-w-2xl mx-auto px-4 py-16 rounded-xl 
                border border-white/10 bg-gradient-to-r 
                from-[#512FEB]/20 to-[#512FEB]/10 text-center
            "
        >
                
            <h2 class="text-2xl font-bold mb-4">Ne manquez aucun article</h2>
            <p class="text-white/70 mb-6">Inscrivez-vous à notre newsletter pour recevoir les dernières actualités SilverCore.</p>
            
            <div class="flex gap-2 max-w-md mx-auto">

                <input 
                    type="email" 
                    placeholder="Votre email"
                    class="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-[#512FEB]"
                />

                <button 
                    class="px-6 py-2 bg-[#512FEB] rounded-lg font-semibold hover:bg-[#512FEB]/90 transition-all hover:scale-105"
                >
                    S'abonner
                </button>

            </div>

        </section>

    </div>

</template>

<script setup lang="ts">
    
import { onMounted } from 'vue';
import blog_config from '../config/blog_config.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from 'vue-router';

gsap.registerPlugin(ScrollTrigger);

const articles = blog_config.blog.articles;
const router = useRouter();


onMounted(() => {
    
    gsap.fromTo(
        '.blog-hero-title',
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

    
    gsap.fromTo(
        '.featured-card',
        {
            opacity: 0,
            y: 50,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.2,
            ease: 'power3.out',
        }
    );

    
    gsap.fromTo(
        '.blog-grid .blog-card',
        {
            opacity: 0,
            y: 50,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.4,
            ease: 'power3.out',
        }
    );


    const cards = document.querySelectorAll('.blog-card');

    cards.forEach((card: any) => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -15,
                boxShadow: '0 20px 40px rgba(81, 47, 235, 0.3)',
                duration: 0.3,
                ease: 'power2.out',
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                duration: 0.3,
                ease: 'power2.out',
            });
        });
    });

});

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
};

</script>

<style scoped>
.featured-card {
  box-shadow: 0 8px 32px rgba(81, 47, 235, 0.15);
}
</style>
