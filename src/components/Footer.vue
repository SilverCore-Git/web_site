<script setup lang="ts">
import { useRouter } from "vue-router";
import footer_config from "../config/footer_config.json"

const router = useRouter();

const open = (href: string) => {
    window.open(href + '?from=www.silvercore.fr');
}
</script>

<template>

    <footer
        class="flex flex-col border-[rgba(255,255,255,0.15)] border-t"
    >
        <div class="py-[3em] flex flex-col mx-[2em]
                    sm:mx-[4em]
                    md:mx-[8em]
                    md:flex-row
                    xl:justify-between
        ">
            <div
                class=" h-full flex flex-col "
            >
                <div>
                    <div
                        class="flex items-center my-2.5"
                    >
                        <img
                            class="h-[50px] pr-[7px]"
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
                        target="_blank"
                        class=" bg-[rgba(255,255,255,0.2)]  p-2.5 rounded-[7px] mr-[15px]"
                    >
                        <i
                            class="bi"
                            :class="social.icon"
                        />
                    </a>
                </div>

            </div>

            <div class="flex h-full flex-col
                        xl:flex-row
                    ">
                <div
                    class=" flex pr-[2em] py-[1em]"
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
                                @click="item.href.startsWith('http') ? open(item.href) : router.push(item.href)"
                            >{{item.name}}</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div
            v-for="droits_reserves in footer_config.droits_reserves"
            class="py-[1.5em] pl-[2em] border-[rgba(255,255,255,0.15)] border-t"
        >
            <a
                :href="droits_reserves.href"
                class="text-[rgba(255,255,255,0.7)]"
            >{{ droits_reserves.text }}</a>
        </div>
    </footer>

</template>