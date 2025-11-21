<script setup lang="ts">
import navbar_config from "../config/navbar_config.json";
import SButton from "./SButton.vue";

const navbar_btn = navbar_config.btn;
const croix_valeur = navbar_config.valeur ;

const button_contact = () => {
    window.location.href = navbar_btn.href;
};


const navBar: HTMLElement | null = document.getElementById("NavBar");

navBar?.addEventListener("click", () => {
    // console.log("[DEBUG]: Menu hamburger activer");
    navBar.classList.toggle("menu_hamburger_active");
});
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
        <!-- ml-[25px] -->
        <!-- mr-[13px] -->
            <img
                class="h-[38px]"
                :src="navbar_config.logo" alt=""

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
                    :href="Nav.href"

            >{{ Nav.name }}</a>

        </div>

        <div class="hidden lg:flex">
            <SButton
                class=" hidden"
                :content= "navbar_btn.content"
                :href="navbar_btn.href"
            />
        </div>

        <div
            class="flex flex-col justify-around h-[35px] w-[35px]
                lg:hidden
            "
            @click="click_menu_hamburger"
        >
            <div
                v-for="value in 3"
                class="bg-white w-full h-[5px] rounded-sm"
            ></div>

        </div>

        <div
            v-for="rotation in [-45, 45]"
            :key="rotation"
            class="flex flex-col justify-center h-[38px] w-[38px] mr-[25px] min-lg:hidden absolute right-0
                    hidden
                "
        >
            <div
                class="bg-white w-full h-[5px] rounded-[4px]"
                :style="{ transform: `rotate(${rotation}deg)` }"
            ></div>

        </div>

    </nav>


</template>


<style scoped>

.menu_hamburger_active {
    background-color: red;
}

</style>