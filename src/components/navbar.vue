<template>

    <nav class="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">

        <div @click="router.push('/')" class="flex flex-row text-2xl font-bold text-gray-900 cursor-pointer">
            <img src="/favicon.svg" class="w-10 mr-2">
            <span class="text-blue-600">Silver</span>
            <span class="text-gray-800">Core</span>
        </div>

        <nav class="hidden md:flex space-x-8">
            <a @click="router.push('/'); scroll_to('home')" class=" cursor-pointer text-gray-600 hover:text-blue-600 transition duration-300 font-medium">Accueil</a>
            <a @click="router.push('/'); scroll_to('services')" class=" cursor-pointer text-gray-600 hover:text-blue-600 transition duration-300 font-medium">Services</a>
            <a @click="router.push('/'); scroll_to('a-propos')" class=" cursor-pointer text-gray-600 hover:text-blue-600 transition duration-300 font-medium">À Propos</a>
            <a @click="router.push('/'); scroll_to('contact')" class=" cursor-pointer text-gray-600 hover:text-blue-600 transition duration-300 font-medium">Contact</a>
        </nav>

        <button class="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>

      </nav>

</template>

<script lang="ts" setup>

  import { useRouter } from 'vue-router'

  const router = useRouter();

  const scroll_to = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

</script>