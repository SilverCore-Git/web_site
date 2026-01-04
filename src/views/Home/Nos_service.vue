<script setup lang="ts">
import Service_card from '../../components/Service_card.vue';
import home_config from '../../config/home_config.json';
import TextWriter from '../../components/textWriter.vue';
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = home_config.services;

onMounted(() => {
        
    // Animation du titre
    gsap.fromTo(
        '.services-title',
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
                trigger: '.services-title',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        }
    );

    // Animation de la description
    gsap.fromTo(
        '.services-description',
        {
            opacity: 0,
            y: 30,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.services-description',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        }
    );

    // Animation des cartes de service avec stagger
    gsap.fromTo(
        '.service-card-item',
        {
            opacity: 0,
            y: 80,
            rotation: -5,
        },
        {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.services-cards-container',
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            },
        }
    );

    // Hover effect sur les cartes
    const cards = document.querySelectorAll('.service-card-item');

    cards.forEach((card: any) => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -15,
                boxShadow: '0 20px 50px rgba(81, 47, 235, 0.4)',
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

</script>

<template>

    <section 
        class="flex justify-center items-center flex-col text-center pt-40 relative overflow-hidden"
        id="services"
    >

        <div class="absolute top-40 left-0 opacity-40 w-[600px] h-[200px] bg-[#512FEB]/50 rounded-full blur-[120px] -z-1"></div>

        <div 
            class="mb-10 services-title"
        >
            <h2 class="min-w-xl flex justify-center items-center gap-2 font-bold">
                {{ services.title.text }}
                <TextWriter
                    :words="services.title.keyWords"
                />
            </h2>
            <p class="services-description">
                {{ services.description }}
            </p>
        </div>

        <div
            class="
                    flex justify-center items-center
                    flex-wrap max-w-6xl gap-4 services-cards-container
                "
        >

            <div v-for="service in services.services" :key="service.name" class="service-card-item">
              <Service_card
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