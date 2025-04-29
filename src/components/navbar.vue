<script setup lang="ts">

        interface NavItem {
                name: string;
                icon: string;
                href: string;
        }

        const nav_items: NavItem[] = [
                { name: "Accueil", icon: "home", href: "/#home" },
                { name: "Nos services", icon: "project-diagram", href: "/#services" },
                { name: "Qui sommes nous", icon: "users", href: "/#about" },
                { name: "Contact", icon: "envelope", href: "/#contact" }
        ];

</script>


<template>

        <div class="bg-black sticky top-0 h16 text-black">#</div>

        <nav class="sticky top-5 z-50 h-16 rounded-2xl ml-36 mr-36">

                <a href="/">

                        <ul class="absolute inset-0 ml-9 flex justify-start items-center flex-row text-white">

                                <li><img class="w-55" src="../assets/logo+text.png" /></li>

                        </ul>

                </a>
      
                <ul class="absolute inset-0 mr-11 flex justify-end items-center flex-row text-white gap-20">

                        <li class="cursor-pointer hover:scale-110 transition-all duration-500" v-for="(item, index) in nav_items" :key="index">
                                
                                <a :href="item.href">

                                        <font-awesome-icon :icon="item.icon" class="mr-2" />
                                        {{ item.name }}

                                </a>

                        </li>

                </ul>

        </nav>

</template>
      

<style scoped>

        nav {
                background-color: rgb(9, 0, 39);
                border: 0.5px solid #ffff;
                box-shadow: 0px 0px 60px #1f4c65;
        }

</style>


