<template>

    <div class="bg-gray-900 text-white py-8">

        <div class="container mx-auto text-center px-4 sm:px-6 lg:px-8">

            <p class="mb-4">&copy; {{ year }} SilverCore. Tous droits réservés.</p>

            <div class="flex justify-center space-x-6">
                <a @click="router.push('/confidential')" class="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Politique de Confidentialité</a>
                <a href="https://www.silvertransfert.fr" target="_blank" class="text-gray-400 hover:text-white transition duration-300">Silvertransfert</a>
                <a href="https://www.silvernote.fr" target="_blank" class="text-gray-400 hover:text-white transition duration-300">Silvernote</a>
            </div>

        </div>

    </div>

</template>

<script lang="ts" setup>

import { useRouter } from 'vue-router';

const router = useRouter();

const year: number = new Date().getFullYear();

</script>