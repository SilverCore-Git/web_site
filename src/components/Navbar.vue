<script setup lang="ts">
import navbar_config from "../config/navbar_config.json";
const btn = navbar_config.btn;

const button_contact = () => {
    btn.href
};
</script>

<template>

    <!-- [] -->

    <div class="w-screen h-[16%] center">
            <div 

            class="max-w-[1200px] w-[90%] rounded-[7px] flex justify-between items-center bg-black"

            >
                <div 

                class=" left center space-around cursor_pointer ml-[25px]"

                >
                    <img 

                    class="h-[30px]"
                    :src="navbar_config.logo" alt=""
                    
                    >
                    <h3 class="ml-[10px] ">{{ navbar_config.title }}</h3>
                </div>

                <div 
                
                class="center my-[20px]"
                
                >

                    <a 
                        v-for="Nav in navbar_config.tab"
                        class="text-white p-[15px] text-white cursor_pointer Body_XS"
                        :href="Nav.href"
                        
                    >{{ Nav.name }}</a>

                </div>

                <button
                @click="button_contact"
                class="btn_basic center mr-[25px]"
                :href="btn.href"
                
                >{{ btn.content }}</button>
            </div>
        </div>

</template>


<style scoped>


.Page {
    /* padding: 15px; */
    color: white;
}
</style>