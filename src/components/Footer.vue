<script setup lang="ts">
import { useRouter } from "vue-router";
import footer_config from "../config/footer_config.json"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

const router = useRouter();

const open = (href: string) => {
    window.open(href + '?from=www.silvercore.fr');
}

onMounted(() => {
  // Animation du logo et titre
  gsap.fromTo(
    '.footer-logo',
    {
      opacity: 0,
      x: -30,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );

  // Animation des réseaux sociaux
  gsap.fromTo(
    '.social-icon',
    {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out',
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );

  // Animation des catégories
  gsap.fromTo(
    '.footer-category',
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );

  // Hover effect sur les liens
  const links = document.querySelectorAll('footer a');
  links.forEach((link: any) => {
    if (!link.href.includes('mailto') && !link.href.includes('http')) {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          color: '#512FEB',
          x: 5,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          color: 'rgba(255, 255, 255, 0.7)',
          x: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    }
  });

  // Hover effect sur les icônes sociales
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach((icon: any) => {
    icon.addEventListener('mouseenter', () => {
      gsap.to(icon, {
        scale: 1.2,
        background: 'rgba(81, 47, 235, 0.5)',
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    icon.addEventListener('mouseleave', () => {
      gsap.to(icon, {
        scale: 1,
        background: 'rgba(255, 255, 255, 0.2)',
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });
});

</script>

<template>

    <footer
        class="flex flex-col border-[rgba(255,255,255,0.15)] border-t"
    >
        <div class="py-[3em] flex flex-col mx-[2em]
                    sm:mx-[4em]
                    md:mx-[8em]
                    md:flex-row
                    xl:justify-between
        ">
            <div
                class="footer-logo h-full flex flex-col "
            >
                <div>
                    <div
                        class="flex items-center my-2.5"
                    >
                        <img
                            class="h-[50px] pr-[7px]"
                            :src="footer_config.logo"
                        />
                        <h3
                            class="font-bold font-outfit text-[25px]"
                        >{{ footer_config.title }}</h3>
                    </div>
                    <div
                        class="w-[85%] max-w-[500px]"
                    >{{ footer_config.description }}</div>
                </div>


                <div
                    class="flex my-[3em]"
                >
                    <a
                        v-for="social in footer_config.social"
                        :key="social.icon"
                        :href="social.href"
                        target="_blank"
                        class="social-icon bg-[rgba(255,255,255,0.2)] p-2.5 rounded-[7px] mr-[15px] transition-all"
                    >
                        <i
                            class="bi"
                            :class="social.icon"
                        />
                    </a>
                </div>

            </div>

            <div class="flex h-full flex-col
                        xl:flex-row
                    ">
                <div
                    v-for="categories_footer in footer_config.categories"
                    :key="categories_footer.title"
                    class="footer-category flex pr-[2em] py-[1em]"
                >
                    <div>
                        <div
                            class="font-bold font-outfit text-[20px] pb-[13px]"
                        >{{ categories_footer.title }}</div>
                        <div
                            v-for="item in categories_footer.content"
                            :key="item.name"
                            class="py-[7px]"
                        >
                            <a
                                class="font-outfit text-[rgba(255,255,255,0.7)] transition-all"
                                @click="item.href.startsWith('http') ? open(item.href) : router.push(item.href)"
                            >{{item.name}}</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div
            v-for="droits_reserves in footer_config.droits_reserves"
            class="py-[1.5em] pl-[2em] border-[rgba(255,255,255,0.15)] border-t"
        >
            <a
                :href="droits_reserves.href"
                class="text-[rgba(255,255,255,0.7)]"
            >{{ droits_reserves.text }}</a>
        </div>
    </footer>

</template>