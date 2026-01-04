<script setup lang="ts">
import { ref, onMounted } from 'vue';
import faq_config from '../config/faq_config.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = faq_config.faq.faqs;
const activeId = ref<number | null>(null);

const toggleFaq = (id: number) => {
    activeId.value = activeId.value === id ? null : id;
};

onMounted(() => {

    // Animation du titre
    gsap.fromTo(
        '.faq-title',
        {
            opacity: 0,
            y: 50,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.faq-title',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        }
    );

    // Animation des items FAQ
    gsap.fromTo(
        '.faq-item',
        {
            opacity: 0,
            x: -30,
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.faq-container',
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            },
        }
    );

});

</script>

<template>
        
    <section id="faq" class="py-20 relative overflow-hidden">

        <div class="max-w-4xl mx-auto px-4">
                
            <div class="faq-title text-center mb-16">
                <h2 class="text-[28px] sm:text-[40px] md:text-[50px] font-bold mb-4">
                    {{ faq_config.faq.title }}
                </h2>
                <p class="text-white/70 text-lg">
                    {{ faq_config.faq.description }}
                </p>
            </div>

            <div class="faq-container space-y-4">

                <div
                    v-for="faq in faqs"
                    :key="faq.id"
                    class="faq-item"
                >
                
                <button
                    @click="toggleFaq(faq.id)"
                    class="w-full flex items-center justify-between p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                    :class="{
                        'bg-white/10 border-[#512FEB]/50': activeId === faq.id,
                    }"
                >
                    <span class="text-left font-semibold text-lg text-white">
                        {{ faq.question }}
                    </span>
                    <i
                        class="bi bi-chevron-down transition-transform duration-300"
                        :class="{
                            'rotate-180': activeId === faq.id,
                        }"
                    />
                </button>

                    <transition
                        enter-active-class="transition-all duration-300"
                        enter-from-class="opacity-0 max-h-0"
                        enter-to-class="opacity-100 max-h-96"
                        leave-active-class="transition-all duration-300"
                        leave-from-class="opacity-100 max-h-96"
                        leave-to-class="opacity-0 max-h-0"
                    >
                        <div
                            v-if="activeId === faq.id"
                            class="overflow-hidden"
                        >
                            <div class="p-6 text-white/80 bg-white/5 rounded-b-lg border border-t-0 border-white/10">
                                {{ faq.answer }}
                            </div>
                        </div>
                    </transition>

                </div>
            </div>

            <div class="mt-16 text-center">
                <p class="text-white/70 mb-6">Vous n'avez pas trouvé votre réponse ?</p>
                <a
                    href="/contact"
                    class="inline-flex items-center px-8 py-3 rounded-lg bg-[#512FEB] border border-white/10 text-white hover:bg-[#512FEB]/90 transition-all duration-300 hover:scale-105"
                >
                    Contactez-nous
                    <i class="bi bi-arrow-right ml-2" />
                </a>
            </div>

        </div>

        <div class="absolute bottom-0 right-0 opacity-20 w-[600px] h-[200px] bg-[#512FEB]/30 rounded-full blur-[120px] -z-1"></div>

    </section>

</template>

<style scoped>
section {
  background: linear-gradient(135deg, rgba(81, 47, 235, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
}
</style>
