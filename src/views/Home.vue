<script lang="ts" setup>

  import Services_card from '../components/Services_card.vue';
  import About from '../components/About.vue';

  interface Service {
    title: string;
    content: string;
    href: string;
  }

  const Services: Service[] = [
    { 
      title: 'Silvertransfert',
      content: 'Silvertransfert est un outil de transfert de fichier en ligne sécurisé et respectieux de la vie privée, transferez vos fichier jusqu\'a 10go !', 
      href: 'https://www.silvertransfert.fr' 
    },
    {
      title: 'Silverauth', 
      content: 'Silverauth est le gestionaire de compte de silvercore.', 
      href: 'https://auth.silvercore.fr' 
    },
    { 
      title: 'silverdium', 
      content: 'Silverdium, serveur minecraft pvp faction modé.', 
      href: 'https://www.silverdium.fr' 
    }
  ]

  const silvertools_project: Service[] = [
    { 
      title: 'SilverBatch vite + vue + tw creator',
      content: 'Ce script de silverbatch vous permet de créer un projet vite + vue + tailwindcss clé en main très facilement, il vous sufit de lancer le script, répondre aux question et c\'est tout !', 
      href: 'https://github.com/SilverCore-Git/silverbatch_vite-vue-tw_creator' 
    }
  ]

  const scroll_to = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

</script>

<template>

    <main class="flex justify-center items-center flex-col" style="height: 80vh; width: 100%;" id="home">

        <h1 class="title  text-8xl font-bold uppercase tracking-wider mb-18">silvercore</h1>

        <a ><button @click="scroll_to('services')" class="btn-services btn-services-link">
            Nos services
        </button></a>

    </main>

    <section class="flex justify-center items-center flex-col" style="height: 100vh; width: 100%;" id="services">

      <h1 class="title text-6xl font-bold uppercase tracking-wider mb-28">Nos services</h1>

      <ul style="cursor: default;" class="card-group flex flex-wrap justify-center gap-16 sm:flex-row flex-col">

        <li v-for="(service, index) in Services" :key="index">

          <Services_card 
            :title="service.title" 
            :content="service.content" 
            :href="service.href"
          />

        </li>

      </ul>

    </section>

    <section class="flex justify-center items-center flex-col" style="height: 100vh; width: 100%;" id="tools">

      <h1 class="title text-6xl font-bold uppercase tracking-wider mb-28">SilverTools</h1>

      <ul style="cursor: default;" class="card-group flex flex-wrap justify-center gap-16 sm:flex-row flex-col">

        <li v-for="(silvertools_project, index) in silvertools_project" :key="index">

          <Services_card 
            :title="silvertools_project.title" 
            :content="silvertools_project.content" 
            :href="silvertools_project.href"
          />

        </li>

      </ul>

    </section>

    <section class="flex justify-center items-center flex-col" style="height: 100vh; width: 100%;" id="about">

      <About />

    </section>

</template>


<style scoped>

.title {
  text-shadow: 0px 0px 20px #1f5877;
}

.card-group:hover .card:not(:hover) {
    opacity: 0.5;
    transform: scale(0.95);
    filter: blur(1px);
    transition: all 0.3s ease;
}

/* From Uiverse.io by ShrinilDhorda */ 
.btn-services {
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(14, 14, 26);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px #1f4c65;
  -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
}

.btn-services:active {
  scale: 0.92;
}

.btn-services:hover {
  background: rgb(2,29,78);
  background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
  color: rgb(4, 4, 38);
}

</style>