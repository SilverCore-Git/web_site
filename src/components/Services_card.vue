<script lang="ts" setup>
    defineProps({

        title: {
            type: String,
            default: 'nom du service'
        },
        content: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
        },
        href: {
            type: String,
            default: 'https://www.silvercore.fr'
        }

    })
</script>


<template lang="html">

       <!-- /* From Uiverse.io by catraco */  -->
       <div class="card w-60 bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 text-slate-100 border border-indigo-700 grid grid-cols-2 justify-center p-4 gap-4 rounded-lg shadow-lg">
        
            <div class="col-span-2 text-lg font-bold capitalize rounded-md ">
                {{ title }}
            </div>

            <div class="col-span-2 rounded-md text-slate-200">
                {{ content }}
            </div>

            <div class="col-span-1">
                <a :href="href" target="_blank">
                <button style="cursor: pointer;" class="rounded-md bg-indigo-700 hover:bg-indigo-500 hover:text-white duration-300 p-2 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" stroke-width="2" 
                        stroke-linecap="round" stroke-linejoin="round" 
                        class="feather feather-external-link text-white">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </button>
                </a>
            </div>

        </div>


</template>


<style scoped>

    .card {
        transition: all 0.3s ease-in-out;
    }
    
    .card:hover {
        box-shadow: 0px 0px 60px #1f4c65;
        transform: scale(1.05);
    }

</style>