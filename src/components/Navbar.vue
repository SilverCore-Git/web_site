<script setup lang="ts">
import navbar_config from "../config/navbar_config.json";
import SButton from "./SButton.vue";

const navbar_btn = navbar_config.btn;

const button_contact = () => {
    window.location.href = navbar_btn.href;
};
</script>

<template>

    <div class="fixed top-0 left-0 w-screen h-[13%] center z-50" >
            <div 
                class="max-w-[1200px] w-[95%] rounded-[7px] flex justify-between items-center bg-black/70 backdrop-blur-sm"

            >
                <div
                    class="center justify-around cursor-pointer ml-[25px]"

                >
                    <img 
                        class="h-[30px]"
                        :src="navbar_config.logo" alt=""
                    
                    >
                    <h3 class="ml-[10px] ">{{ navbar_config.title }}</h3>
                </div>

                <div 
                    class="center my-[5px]"

                >

                    <a 
                            v-for="Nav in navbar_config.tab"
                            class="text-white p-[15px] text-white cursor-pointer Body_XS"
                            :href="Nav.href"
                        
                    >{{ Nav.name }}</a>

                </div>

                <!-- <button
                    @click="button_contact"
                    class="btn_basic center mr-[25px]"
                    :href="btn.href"
                
                >{{ btn.content }}</button> -->

                <SButton
                    :content= "navbar_btn.content"
                    :href="navbar_btn.href"
                    class="mr-[25px]"
                />
            </div>
        </div>

</template>


<style scoped></style>