<script setup lang="ts">
import { useRouter } from "vue-router";
import navbar_config from "../config/navbar_config.json";
import SButton from "./SButton.vue";
import gsap from "gsap";
import { onMounted } from "vue";

const router = useRouter();
const navbar_btn = navbar_config.btn;

const scrollTo = (href: string) => {
    router.push(href);
}

onMounted(() => {
  // Animation d'apparition du navbar
  gsap.fromTo(
    '#NavBar',
    {
      opacity: 0,
      y: -50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }
  );

  // Animation des liens au hover
  const links = document.querySelectorAll('.navbar-link');
  links.forEach((link: any) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        color: '#512FEB',
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        color: '#fff',
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });

  // Effect de glow au scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const navbar = document.getElementById('NavBar');
    
    if (navbar) {
      if (scrollY > 50) {
        gsap.to(navbar, {
          boxShadow: '0 10px 40px rgba(81, 47, 235, 0.3)',
          backdropFilter: 'blur(20px)',
          duration: 0.5,
          ease: 'power2.out',
        });
      } else {
        gsap.to(navbar, {
          boxShadow: '0 0px 0px rgba(81, 47, 235, 0)',
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
});

</script>

<template>

    <nav

        class="
                    fixed top-6 inset-x-3 lg:inset-x-[10%] 2xl:inset-x-[20%] z-50
                    rounded-[7px] flex justify-between items-center
                    border border-gray-400/50 bg-black/70 backdrop-blur-xl
                    px-[13px] md:px-[25px]
                "
        id="NavBar"
    >
        <div
            class="center justify-around cursor-pointer  my-[9.5px]"
            @click="router.push('/')"
        >
            <img
                class="h-[38px]"
                :src="navbar_config.logo"

            >
            <h3

                class="ml-2 font-bold font-outfit text-[25px]"

            >{{ navbar_config.title }}</h3>
        </div>

        <div
            class="center"
        >

            <a
                v-for="Nav in navbar_config.tab"
                class="navbar-link p-[15px] text-white cursor-pointer 
                        text-[16px] font-bold font-outfit 
                        hidden md:flex 
                    "
                @click="scrollTo(Nav.href)"

            >{{ Nav.name }}</a>

        </div>

        <div class="flex">
            <SButton
                class=" hidden"
                :content="navbar_btn.content"
                :href="navbar_btn.href"
            />
        </div>

        <!-- <div
            class="
                flex flex-col justify-center 
                lg:hidden absolute right-4
                bi bi-list text-3xl
                transition-all duration-300
            "
            :style="{ transform: `rotate(${openNav ? '90' : '0'}deg)` }"
            @click="openNav = !openNav"
        /> -->

    </nav>


</template>
