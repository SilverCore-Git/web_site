<script setup lang="ts">
import navbar_config from "../config/navbar_config.json";
import SButton from "./SButton.vue";

const navbar_btn = navbar_config.btn;
const croix_valeur = navbar_config.valeur ;

const button_contact = () => {
    window.location.href = navbar_btn.href;
};


</script>

<template>
            <div 
                class="
                        fixed top-6 inset-x-[10%] 2xl:inset-x-[20%] z-50
                        rounded-[7px] flex justify-between items-center 
                        border border-gray-400/50 bg-black/70 backdrop-blur-sm
                    "

            >
                <div
                    class="center justify-around cursor-pointer ml-[25px] my-[9.5px]"

                >
                    <img 
                        class="h-[38px]"
                        :src="navbar_config.logo" alt=""
                    
                    >
                    <h3 class="ml-[8px] font-bold font-outfit text-[25px]">{{ navbar_config.title }}</h3>
                </div>

                <div 
                    class="center"

                >

                    <a 
                            v-for="Nav in navbar_config.tab"
                            class="text-white p-[15px] text-white cursor-pointer Body_XS 
                                    hidden min-lg:flex
                                "
                            :href="Nav.href"
                        
                    >{{ Nav.name }}</a>

                </div>
                
                <div class="hidden min-lg:flex">
                    <SButton
                        class=" mr-[25px] hidden"
                        :content= "navbar_btn.content"
                        :href="navbar_btn.href"
                    />
                </div>

                <!-- <div 
                    class="flex flex-col justify-around h-[38px] w-[38px] mr-[25px]
                         min-lg:hidden
                    "
                >
                    <div
                        v-for="value in 3"
                        class=" bg-white w-full h-[5px] rounded-[4px]"
                    ></div>

                </div> -->
                
                <!-- <div 
                    class="flex flex-col justify-center h-[38px] w-[38px] mr-[25px]
                         min-lg:hidden absolute right-0
                    "
                >
                    <div
                        class=" bg-white w-full h-[5px] rounded-[4px] rotate-[-45deg]"
                    ></div>

                </div>

                <div 
                    class="flex flex-col justify-center h-[38px] w-[38px] mr-[25px]
                         min-lg:hidden absolute right-0
                    "
                >
                    <div
                        class=" bg-white w-full h-[5px] rounded-[4px] rotate-[45deg]"
                    ></div>

                </div> -->

                <div
                v-for="value_croix in navbar_config.valeur"
                class="flex flex-col justify-center h-[38px] w-[38px] mr-[25px] lg:hidden absolute right-0"
                >
                    <div
                        class="bg-white w-full h-[5px] rounded-[4px]"
                        :style="{ transform: `rotate(${value_croix}deg)` }"
                    ></div>
                </div>

            </div>
            

</template>


<style scoped></style>