<script setup lang="ts">
import navbar_config from "";
</script>

<template>
    <nav class="center parent_navbar ">
        <div class="center navbar">
            <div class="container">
                <div class=" left center space-around cursor_pointer">
                    <img src="/assets/logo/score/silvercore_logo.svg" alt="">
                    <h3 class="ml-[10px]">Silvercore</h3>
                </div>
                <div class="center">
                    <p class="Page cursor_pointer Body_XS">Accueil</p>
                    <p class="Page cursor_pointer Body_XS">Service</p>
                    <p class="Page cursor_pointer Body_XS">Politique</p>
                    <p class="Page cursor_pointer Body_XS">Contact</p>
                </div>
                <div class="btn_basic center cursor_pointer">Contact</div>
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
}
</style>