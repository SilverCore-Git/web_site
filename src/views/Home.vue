<template>

    <main 
      id="home" 
      class="gradient-bg text-white py-20 md:py-32 h-screen"
    >

        <div class="container mx-auto text-center px-4 sm:px-6 lg:px-8">

            <h1 
                class="notranslate text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
                style="text-shadow: 2px 2px 4px var(--primary);"
            >
                SilverCore
            </h1>

            <p class="text-3xl mb-16 max-w-3xl mx-auto">
                Site en construction...
            </p>

            <section class="flex justify-center items-center flex-col">
                <h2 class=" font-bold text-xl mb-2">Découvrir nos services :</h2>
                <div class="flex justify-center items-center flex-wrap gap-4">
                    <button class="btn-primary">
                        <a href="https://www.silvernote.fr">Silvernote</a>
                    </button>
                    <button class="btn-primary">
                        <a href="https://www.silvertransfert.fr">Silvertransfert</a>
                    </button>
                </div>
            </section>
<!-- 
            <a @click="scroll_to('services')" class="btn-primary text-lg">
                Découvrir nos Services
            </a> -->

        </div>

    </main>
</template>