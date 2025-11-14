<script setup lang="ts">
import footer_config from "../config/footer_config.json"


</script>

<template>

    <footer
        class="flex flex-col border-[rgba(255,255,255,0.15)] border-t-[1px]"
    >
        <div class=" py-[3em] flex justify-between items-center mx-[8em] ">
            <div
                class=" h-full flex flex-col "
            >
                <div>
                    <div
                        class="flex items-center my-[10px]"
                    >
                        <img
                            class="h-[50px]"
                            :src="footer_config.logo"
                        />
                        <h3
                            class="font-bold font-outfit text-[25px]"
                        >{{ footer_config.title }}</h3>
                    </div>
                    <div
                        class="w-[85%] max-w-[500px]"
                    >{{ footer_config.description }}</div>
                </div>


                <div
                    class="flex my-[3em]"
                >
                    <a
                        v-for="social in footer_config.social"
                        :href="social.href"
                        class="bg-gray-500 p-[10px] rounded-[7px] mr-[15px]"
                    >
                        <img
                            :src="social.icon"
                            class="w-[20px] h-[20px]"
                        >
                    </a>
                </div>

            </div>

            <div class=" h-full flex" >
                <div
                    class=" flex p-[1em]"
                    v-for="categories_footer in footer_config.categories"
                >
                    <div>
                        <div
                            class="font-bold font-outfit text-[20px] pb-[13px]"
                        >{{ categories_footer.title }}</div>
                        <div
                            v-for="item in categories_footer.content"
                            class="py-[7px]"
                        >
                            <a
                                class="font-outfit text-[rgba(255,255,255,0.7)]"
                                :href="item.href"
                            >{{item.name}}</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div
            v-for="droits_reserves in footer_config.droits_reserves"
            class="py-[1.5em] pl-[2em] border-[rgba(255,255,255,0.15)] border-t-[1px]"
        >
            <a 
                :href="droits_reserves.href" 
                class="text-[rgba(255,255,255,0.7)]"
            >{{ droits_reserves.text }}</a>
        </div>
    </footer>

</template>