<script setup lang="ts">
import footer_config from "../config/footer_config.json"


</script>

<template>

    <footer
        class="h-[40%] flex justify mx-[8em]"
    >

        <div
            class=" h-full w-[50%] bg-red-600 flex justify-center flex-col"
        >
            <div class="flex">
                <div
                    class="flex items-center"
                >
                    <img
                        class="h-[50px] bg-amber-300"
                        :src="footer_config.logo"
                    />
                    <div>{{ footer_config.title }}</div>
                </div>
                <div>{{ footer_config.description }}</div>
            </div>


            <div
                class="flex"
            >
                <a
                    v-for="social in footer_config.social"
                    :href="social.href"
                    class="bg-gray-500 p-[10px] rounded-[7px] mx-[10px]"
                >
                    <img
                        :src="social.icon"
                        class="w-[20px] h-[20px]"
                    >
                </a>
            </div>

        </div>

        <div class=" h-full  w-[50%] bg-blue-600" >
            <h2>hhgjfkutuogyfi</h2>
        </div>


    </footer>

</template>