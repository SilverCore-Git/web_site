<script setup lang="ts">

        interface NavItem {
                name: string;
                icon: string;
                href: string;
        }

        const nav_items: NavItem[] = [
                { name: "Accueil", icon: "home", href: "" },
                { name: "Nos projets", icon: "project-diagram", href: "" },
                { name: "Qui sommes nous", icon: "users", href: "" },
                { name: "Contact", icon: "envelope", href: "" }
        ];

</script>


<template>

        <nav class=" relative bg-black h-16">

                <a href="/"><ul class=" absolute inset-0 ml-16 flex justify-start items-center flex-row text-white">

                        <li><img class="w-55" src="../assets/logo+text.png"></li>

                </ul></a>

                <ul class=" absolute inset-0 mr-16 flex justify-end items-center flex-row text-white gap-20">

                        <li class=" cursor-pointer hover:scale-110 transition-all duration-500" v-for="(item, index) in nav_items" :key="index">
                                <a :href="item.href"> <font-awesome-icon :icon="item.icon" class="mr-2" /> {{ item.name }} </a>
                        </li>

                </ul>

        </nav>

</template>



