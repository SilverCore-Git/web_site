<template>

    <div class="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">

        <div @click="router.push('/')" class="flex flex-row text-2xl font-bold text-gray-900 cursor-pointer">
          <img src="../assets/silvercore_logo_text_nobg.svg" alt="logo silvercore" class="w-40">
        </div>

        <nav class="hidden md:flex space-x-8">
            <a @click="router.push('/'); scroll_to('home')" class=" cursor-pointer text-gray-600 hover:text-[var(--primary)] transition duration-300 font-medium">Accueil</a>
            <a @click="router.push('/'); scroll_to('services')" class=" cursor-pointer text-gray-600 hover:text-[var(--primary)] transition duration-300 font-medium">Services</a>
            <a @click="router.push('/'); scroll_to('a-propos')" class=" cursor-pointer text-gray-600 hover:text-[var(--primary)] transition duration-300 font-medium">À Propos</a>
            <a @click="router.push('/'); scroll_to('contact')" class=" cursor-pointer text-gray-600 hover:text-[var(--primary)] transition duration-300 font-medium">Contact</a>
        </nav>

        <nav 
          :class="menu ? 'right-0' : '-right-60'"
          class="flex flex-col justify-center items-center bg-white xl:hiden fixed top-0  gap-9 px-10 h-screen z-30 shadow-sm"
          style="transition: all 0.3s;"
        >
            <a @click="menu = false; router.push('/'); scroll_to('home')" class=" cursor-pointer text-gray-600 hover:text-[var(--primary)] transition duration-300 font-medium">Accueil</a>
            <a @click="menu = false; router.push('/'); scroll_to('services')" class=" cursor-pointer text-gray-600 hover:text-[var(--primary)] transition duration-300 font-medium">Services</a>
            <a @click="menu = false; router.push('/'); scroll_to('a-propos')" class=" cursor-pointer text-gray-600 hover:text-[var(--primary)] transition duration-300 font-medium">À Propos</a>
            <a @click="menu = false; router.push('/'); scroll_to('contact')" class=" cursor-pointer text-gray-600 hover:text-[var(--primary)] transition duration-300 font-medium">Contact</a>
        </nav>

        <button 
          @click="menu = !menu" 
          class="cursor-pointer  xl:hidden text-gray-600 hover:text-[var(--primary )] focus:outline-none z-50"
          style="transition: all 0.3s;"
          :class="menu ? 'rotate-90' : 'rotate-0'"
        >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>

      </div>

</template>

<script lang="ts" setup>

  import { ref } from 'vue';
import { useRouter } from 'vue-router'

  const router = useRouter();
  const menu = ref<boolean>(false);

  const scroll_to = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

</script>