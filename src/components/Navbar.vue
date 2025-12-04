<script setup lang="ts">
import { useRouter } from "vue-router";
import navbar_config from "../config/navbar_config.json";
import SButton from "./SButton.vue";
import { ref } from "vue";

const router = useRouter();
const navbar_btn = navbar_config.btn;
const openNav = ref<boolean>(false);

const scrollTo = (href: string) => {
    router.push(href);
}

</script>

<template>

    <nav

        class="
                    fixed top-6 inset-x-[10%] 2xl:inset-x-[20%] z-50
                    rounded-[7px] flex justify-between items-center
                    border border-gray-400/50 bg-black/70 backdrop-blur-sm
                    px-[13px]
                    mg:px-[25px]
                "
        id="NavBar"
    >
        <div
            class="center justify-around cursor-pointer  my-[9.5px]"

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
                class="p-[15px] text-white cursor-pointer Body_XS
                        hidden lg:flex
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


<style scoped>

.menu_hamburger_active {
    background-color: red;
}

</style>