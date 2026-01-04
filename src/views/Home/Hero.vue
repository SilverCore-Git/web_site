<script setup lang="ts">
import SButton from '../../components/SButton.vue';
import hero_config from "../../config/hero_config.json"
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
    // Animation du titre - mot par mot
    const title = document.querySelector('.hero-title');
    if (title) {
        const text = title.textContent;
        title.innerHTML = '';
        
        const words = text!.split(' ');
        words.forEach((word: string, _wordIndex: number) => {
            const wordSpan = document.createElement('span');
            wordSpan.textContent = word;
            wordSpan.style.display = 'inline-block';
            wordSpan.style.marginRight = '0.2em';
            title.appendChild(wordSpan);
        });

        gsap.fromTo(
            title.querySelectorAll('span'),
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power3.out',
            }
        );
    }

    // Animation du descriptif
    gsap.fromTo(
        '.hero-description',
        {
            opacity: 0,
            y: 50,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            ease: 'power3.out',
        }
    );

    // Animation du bouton
    gsap.fromTo(
        '.hero-button',
        {
            opacity: 0,
            scale: 0.8,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 0.6,
            ease: 'back.out',
        }
    );

    // Animation du blob (floating)
    gsap.to('.hero-blob', {
        y: -20,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
    });
});
</script>

<template>

    <section
        class="flex justify-center items-center flex-col pt-[15em] px-3.5 overflow-hidden relative z-10"
    >

        <div class="hero-blob absolute top-10 right-0 opacity-40 w-[600px] h-[200px] bg-[#512FEB]/50 rounded-full blur-[120px] -z-10"></div>

        <div
            class="max-w-4xl text-center flex justify-center items-center flex-col gap-6"
        >

            <h1 class="hero-title font-bold leading-tight max-w-3xl">
                {{ hero_config.title }}
            </h1>

            <div class="hero-description mb-4 max-w-lg text-[16px]
                xl:text-[18px]
            ">
                {{ hero_config.description }}
            </div>

            <div class="hero-button pb-6">
              <SButton
                  content="Nos services"
                  premium
                  href="#services"
              />
            </div>

        </div>
        
    </section>

</template>
