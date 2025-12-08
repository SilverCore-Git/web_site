<script setup lang="ts">
import home_config from '../../config/home_config.json';
import Politique_card from '../../components/Politique_card.vue';
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const politiques = home_config.politiques;

onMounted(() => {
        
    // Animation du titre
    gsap.fromTo(
        '.politiques-title',
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
                trigger: '.politiques-title',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        }
    );

    // Animation des cartes
    gsap.fromTo(
        '.politique-card-item',
        {
            opacity: 0,
            x: -50,
            rotateY: -20,
        },
        {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.politiques-cards-container',
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            },
        }
    );

    // Hover effect
    const cards = document.querySelectorAll('.politique-card-item');

    cards.forEach((card: any) => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                boxShadow: '0 20px 40px rgba(81, 47, 235, 0.3)',
                duration: 0.3,
                ease: 'power2.out',
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: '0 0px 0px rgba(0, 0, 0, 0)',
                duration: 0.3,
                ease: 'power2.out',
            });
        });

    });

});

</script>

<template>

    <section 
        class="flex justify-center items-center flex-col text-center pt-[13%] pb-[5em] relative overflow-hidden"
        id="politiques"
    >

        <div class="absolute top-40 right-0 opacity-40 w-[600px] h-[200px] bg-[#512FEB]/50 rounded-full blur-[120px] -z-1"></div>

        <div 
            class="politiques-title mb-10"
        >
            <h2 class="text-[28px] sm:text-[40px] md:text-[50px] font-bold">{{ politiques.title }}</h2>
            <p class="">
                {{ '' }}
            </p>
        </div>

        <div
            class="
                    flex justify-center items-center
                    flex-wrap max-w-8xl gap-4 politiques-cards-container
                "
        >

            <div v-for="service in politiques.politique" :key="service.title" class="politique-card-item">
              <Politique_card
                  :prop="service"
              />
            </div>

        </div>

    </section>

</template>

<style scoped>
.parent_nos_service {
    height: 100%;
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
}
</style>