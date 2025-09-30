<template>

    <main 
      id="home" 
      class="gradient-bg text-white py-20 md:py-32"
    >

        <div class="container mx-auto text-center px-4 sm:px-6 lg:px-8">

            <h1 
                class="notranslate text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
                style="text-shadow: 2px 2px 4px var(--primary);"
            >
                SilverCore
            </h1>

            <p class="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
                SilverCore vous offre des services de divertissement et utilitaires originaux, respectueux de votre vie privée et accessibles à tous.
            </p>

            <a @click="scroll_to('services')" class="btn-primary text-lg">
                Découvrir nos Services
            </a>

        </div>

    </main>

    <section 
      id="a-propos" 
      class="py-16 bg-white rounded-lg mx-4 sm:mx-8 lg:mx-16 -mt-16 relative z-10 card-shadow"
    >

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <h2 class="text-3xl font-bold text-gray-900 mb-8">Notre Engagement : Innovation et Intégrité</h2>

            <p class="text-lg text-gray-700 max-w-4xl mx-auto mb-10">
                Chez SilverCore, nous croyons en un monde où la protection de la vie privée n'est pas une option, mais une norme. 
                Chaque service que nous développons est conçu pour être esthétique, intuitif et sécurisé. 
                Garantissant une transparence totale et une expérience utilisateur inégalée.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

                <div 
                  v-for="(card, index) in convictions_list"
                  :key="index" 
                  class="p-6 bg-gray-50 rounded-xl card-shadow"
                >
                
                    <div class="text-5xl mb-4 icon-color">{{ card.emoji }}</div>
                    <h3 class="text-xl font-semibold mb-3 text-gray-900">{{ card.title }}</h3>
                    <p class="text-gray-600">{{ card.content }}</p>

                </div>

            </div>

        </div>

    </section>


    <section id="services" class="py-16 bg-gray-100">

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <h2 class="text-4xl uppercase font-bold text-gray-900 mb-12"
                style="text-shadow: 1px 1px 2px var(--primary);"
            >Nos Services</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

                <Services_card 
                    v-for="(service, index) in service_list"
                    :key="index"
                    :title="service.title"
                    :description="service.content"
                    :adventages="service.advantages"
                    :img="service.img"
                    :link="service.link"
                />

            </div>

        </div>

    </section>

    <section class="py-16 bg-[var(--primary)] text-white text-center rounded-t-3xl">

        <div class="container mx-auto px-4 sm:px-6 lg:px-8">

            <h2 class="text-3xl font-bold mb-6">La Transparence au Cœur de Nos Actions</h2>

            <p class="text-lg max-w-3xl mx-auto ">
                SilverCore s'engage pour un avenir numérique où la transparence et le respect de l'utilisateur sont primordiaux. Nos solutions reflètent notre dévouement à ces principes.
            </p>

        </div>
        
    </section>

    <section id="contact" class="py-16 bg-white">

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <h2 class="text-3xl font-bold text-gray-900 mb-8">Nous Contacter</h2>

            <p class="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
                Rejoignez nos communautés Discord pour obtenir du support, discuter avec nous et rester informé des dernières nouveautés !
            </p>
            
            <div class="flex flex-col sm:flex-row justify-center gap-6 max-w-xl mx-auto">

                <a href="https://discord.gg/mKs3uMTJWM" target="_blank" class="btn-second flex items-center justify-center">
                    <svg class="mr-2" width="20px" height="20px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 11.6C2 8.23969 2 6.55953 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C6.55953 2 8.23969 2 11.6 2H20.4C23.7603 2 25.4405 2 26.7239 2.65396C27.8529 3.2292 28.7708 4.14708 29.346 5.27606C30 6.55953 30 8.23969 30 11.6V20.4C30 23.7603 30 25.4405 29.346 26.7239C28.7708 27.8529 27.8529 28.7708 26.7239 29.346C25.4405 30 23.7603 30 20.4 30H11.6C8.23969 30 6.55953 30 5.27606 29.346C4.14708 28.7708 3.2292 27.8529 2.65396 26.7239C2 25.4405 2 23.7603 2 20.4V11.6Z" fill="white"/>
                        <path d="M23.6361 9.33998C22.212 8.71399 20.6892 8.25903 19.0973 8C18.9018 8.33209 18.6734 8.77875 18.5159 9.13408C16.8236 8.89498 15.1469 8.89498 13.4857 9.13408C13.3283 8.77875 13.0946 8.33209 12.8974 8C11.3037 8.25903 9.77927 8.71565 8.35518 9.3433C5.48276 13.4213 4.70409 17.3981 5.09342 21.3184C6.99856 22.6551 8.84487 23.467 10.66 23.9983C11.1082 23.4189 11.5079 22.8029 11.8523 22.1536C11.1964 21.9195 10.5683 21.6306 9.9748 21.2951C10.1323 21.1856 10.2863 21.071 10.4351 20.9531C14.0551 22.5438 17.9881 22.5438 21.5649 20.9531C21.7154 21.071 21.8694 21.1856 22.0251 21.2951C21.4299 21.6322 20.8 21.9211 20.1442 22.1553C20.4885 22.8029 20.8865 23.4205 21.3364 24C23.1533 23.4687 25.0013 22.6567 26.9065 21.3184C27.3633 16.7738 26.1261 12.8335 23.6361 9.33998ZM12.3454 18.9075C11.2587 18.9075 10.3676 17.9543 10.3676 16.7937C10.3676 15.6331 11.2397 14.6783 12.3454 14.6783C13.4511 14.6783 14.3422 15.6314 14.3232 16.7937C14.325 17.9543 13.4511 18.9075 12.3454 18.9075ZM19.6545 18.9075C18.5678 18.9075 17.6767 17.9543 17.6767 16.7937C17.6767 15.6331 18.5488 14.6783 19.6545 14.6783C20.7602 14.6783 21.6514 15.6314 21.6323 16.7937C21.6323 17.9543 20.7602 18.9075 19.6545 18.9075Z" fill="#5865F2"/>
                    </svg>
                    Discord Support
                </a>

                <a href="https://discord.gg/ftFhQTJsQ5" target="_blank" class="btn-second flex items-center justify-center">
                    <svg class="mr-2" width="20px" height="20px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 11.6C2 8.23969 2 6.55953 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C6.55953 2 8.23969 2 11.6 2H20.4C23.7603 2 25.4405 2 26.7239 2.65396C27.8529 3.2292 28.7708 4.14708 29.346 5.27606C30 6.55953 30 8.23969 30 11.6V20.4C30 23.7603 30 25.4405 29.346 26.7239C28.7708 27.8529 27.8529 28.7708 26.7239 29.346C25.4405 30 23.7603 30 20.4 30H11.6C8.23969 30 6.55953 30 5.27606 29.346C4.14708 28.7708 3.2292 27.8529 2.65396 26.7239C2 25.4405 2 23.7603 2 20.4V11.6Z" fill="white"/>
                        <path d="M23.6361 9.33998C22.212 8.71399 20.6892 8.25903 19.0973 8C18.9018 8.33209 18.6734 8.77875 18.5159 9.13408C16.8236 8.89498 15.1469 8.89498 13.4857 9.13408C13.3283 8.77875 13.0946 8.33209 12.8974 8C11.3037 8.25903 9.77927 8.71565 8.35518 9.3433C5.48276 13.4213 4.70409 17.3981 5.09342 21.3184C6.99856 22.6551 8.84487 23.467 10.66 23.9983C11.1082 23.4189 11.5079 22.8029 11.8523 22.1536C11.1964 21.9195 10.5683 21.6306 9.9748 21.2951C10.1323 21.1856 10.2863 21.071 10.4351 20.9531C14.0551 22.5438 17.9881 22.5438 21.5649 20.9531C21.7154 21.071 21.8694 21.1856 22.0251 21.2951C21.4299 21.6322 20.8 21.9211 20.1442 22.1553C20.4885 22.8029 20.8865 23.4205 21.3364 24C23.1533 23.4687 25.0013 22.6567 26.9065 21.3184C27.3633 16.7738 26.1261 12.8335 23.6361 9.33998ZM12.3454 18.9075C11.2587 18.9075 10.3676 17.9543 10.3676 16.7937C10.3676 15.6331 11.2397 14.6783 12.3454 14.6783C13.4511 14.6783 14.3422 15.6314 14.3232 16.7937C14.325 17.9543 13.4511 18.9075 12.3454 18.9075ZM19.6545 18.9075C18.5678 18.9075 17.6767 17.9543 17.6767 16.7937C17.6767 15.6331 18.5488 14.6783 19.6545 14.6783C20.7602 14.6783 21.6514 15.6314 21.6323 16.7937C21.6323 17.9543 20.7602 18.9075 19.6545 18.9075Z" fill="#5865F2"/>
                    </svg>
                    Discord Principal
                </a>

            </div>

        </div>

    </section>

</template>

<script lang="ts" setup>

import Services_card from '../components/Services_card.vue';

  const scroll_to = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

const convictions_list: 
    {
        emoji: string;
        title: string;
        content: string;
    }[] 
    = 
    [
        {
            emoji: "🔒",
            title: "Protection de la Vie Privée",
            content: "Nous garantissons la protection de vos données personnelles avec des solutions chiffrées de bout en bout."
        },
        {
            emoji: "💡",
            title: "Solutions Originales",
            content: "Nous mettons un point d'honneur à offrir des services uniques et innovants qui répondent à vos besoins."
        },
        {
            emoji: "✨",
            title: "Design et Intuitivité",
            content: "Chaque interface est pensée pour être esthétique et facile à utiliser, pour une expérience fluide."
        }
    ];

const service_list: 
    {
        title: string;
        img: string;
        content: string;
        advantages: string[];
        link: string;
    }[]
    =
    [
        {
            title: "SilverTransfert",
            img: "silvertransfert",
            content: "L'équivalent français de WeTransfer, conçu pour la sécurité et la confidentialité. Transférez vos fichiers jusqu'à 10 Go, chiffrés de bout en bout et respectueux de votre vie privée.",
            advantages: [
                "Hébergé en France",
                "Chiffré de bout en bout",
                "Jusqu'à 10Go",
                "Interface intuitive et rapide"
            ],
            link: "https://www.silvertransfert.fr"
        },
        {
            title: "SilverNote",
            img: "silvernote",
            content: "Une application de prise de notes simple, élégante et intuitive. Organisez vos pensées sans effort, en toute sécurité et avec une interface épurée.",
            advantages: [
                "Simplicité d'utilisation",
                "Design épuré et intuitif",
                "Accesible sur tout vos appareils"
            ],
            link: "https://www.silvernote.fr"
        }
    ]

</script>