<script setup lang="ts">
import navbar_config from "../config/navbar_config.json";
const btn = navbar_config.btn;

// import type { Nav } from '../assets/ts/types';
// defineProps<{
//     prop: Nav
// }>();

// const button_contact = () => {};
</script>

<template>
    <nav class="center parent_navbar ">
        <div class="center navbar">
            <div class="container">
                <div class=" left center space-around cursor_pointer">
                    <img :src="navbar_config.logo" alt="">
                    <h3 class="ml-[10px] ">{{ navbar_config.title }}</h3>
                </div>

                <div class="center">

                    <a 
                        v-for="Nav in navbar_config.tab"
                        class="Page cursor_pointer Body_XS"
                        :href="Nav.href"
                        
                    >{{ Nav.name }}</a>

                </div>

                <button

                class="btn_basic center"
                :href="btn.href"
                
                >{{ btn.content }}</button>
                <!--  @click="button_contact" -->
            </div>
        </div>
    </nav>

</template>


<style scoped>
.parent_navbar {
    height: 16%;
    width: 100%

}
.navbar {
    background-color: black;

    height: 53%;
    width: 92%;
    max-width: 1200px;
    border-radius: 7px;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    height: 30px;
    width: 96%;
}

.left {
    width: 8pc;
    display: flex;
    img {
        height: 30px;
    }
}

.Page {
    padding: 15px;
    color: white;
}
</style>