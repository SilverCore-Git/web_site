<script setup lang="ts">

        interface NavItem {
                name: string;
                icon: string;
                href: string;
        }

        const nav_items: NavItem[] = [
                { name: "Accueil", icon: "house", href: "/#home" },              // bi-house
                { name: "Nos services", icon: "diagram-3", href: "/#services" }, // bi-diagram-3
                { name: "SilverTools", icon: "tools", href: "/#tools" },         // bi-tools
                { name: "Qui sommes nous", icon: "people", href: "/#about" }     // bi-people
        ];

        const scroll_to = (id: string) => {
                const element = document.getElementById(id)
                if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                }
        }


</script>


<template>

        <div style="z-index: 2;" class="bg-black sticky top-0 text-black">#</div>

        <nav class="sticky top-5 z-50 h-16 rounded-2xl ml-36 mr-36">

                <a href="/">

                        <ul class="absolute inset-0 ml-9 flex justify-start items-center flex-row text-white">

                                <li><img class="w-55" src="../assets/logo+text.png" /></li>

                        </ul>

                </a>
      
                <ul class="absolute inset-0 mr-11 flex justify-end items-center flex-row text-white gap-20">

                        <li class="cursor-pointer hover:scale-110 transition-all duration-500" v-for="(item, index) in nav_items" :key="index">
                                
                                <a @click="scroll_to(item.href.replace('/#', ''))">

                                        <i :class="`bi bi-${item.icon}`" class="mr-2"></i>
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


