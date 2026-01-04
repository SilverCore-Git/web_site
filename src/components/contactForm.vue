<template>

    <section id="contact" class="py-20 relative overflow-hidden">

        <div class="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-14">

            <div class="contact-title">

                <h2 class="text-[24px] sm:text-[36px] md:text-[40px] font-bold mb-6">
                    Demandez tout ce qui vous passe par la tête.
                </h2>

                <p class="text-white/70 mb-10">
                    Contactez Silvercore dès maintenant : nous répondons à toutes vos questions.
                </p>

                <div class="space-y-6">

                    <div class="contact-info flex items-center gap-3 text-white/70 hover:text-white transition cursor-pointer">
                        <i class="bi bi-envelope" />
                        <a 
                            href="mailto:contact@silvercore.fr" 
                            class="hover:text-white transition"
                        >
                            contact@silvercore.fr
                        </a>
                    </div>

                    <div class="contact-info flex items-center gap-3 text-white/70 hover:text-white transition cursor-pointer">
                        <i class="bi bi-envelope" />
                        <a 
                            href="mailto:support@silvercore.fr" 
                            class="hover:text-white transition"
                        >
                            support@silvercore.fr
                        </a>
                    </div>

                </div>

            </div>

            <form
                class="contact-form space-y-6 backdrop-blur-lg bg-white/5 p-6 rounded-xl border border-white/10 relative"
                action="https://getform.io/f/bllglzrb" method="POST"
            >

                <div>
                    <label class="block text-white mb-2">Nom</label>
                    <input 
                        v-model="form.name" required 
                        placeholder="Jean Moulin"
                        type="text" name="name"
                        class="form-input
                            w-full px-4 py-2 rounded 
                            bg-white/10 text-white placeholder-white/40
                            outline-none focus:ring-2 focus:ring-[#512FEB] transition-all duration-300
                        "   
                    />
                </div>

                <div>
                    <label class="block text-white mb-2">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        v-model="form.email" 
                        required 
                        placeholder="moi@silvercore.fr"
                        class="form-input
                            w-full px-4 py-2 rounded 
                            bg-white/10 text-white placeholder-white/40 
                            outline-none focus:ring-2 focus:ring-[#512FEB] transition-all duration-300
                        "
                    />
                </div>

                <div>
                    <label class="block text-white mb-2">Message</label>
                    <textarea 
                        v-model="form.message" 
                        required 
                        name="message"
                        placeholder="Bonjour, je cherche un..."
                        class="form-textarea
                            w-full px-4 py-2 h-32 rounded outline-none
                            bg-white/10 text-white placeholder-white/40
                            focus:ring-2 focus:ring-[#512FEB] transition-all duration-300"
                    ></textarea>
                </div>

                <input type="hidden" name="_gotcha" style="display:none !important">

             
                <SButton
                    @click="router.push('#contact')"
                    type="submit"
                    content="Envoyer"
                    :arrow="false"
                    class="w-full cursor-pointer hover-scale"
                />

                <p v-if="sent" class="text-green-400 text-sm mt-2">Message envoyé ✔</p>
            </form>


        </div>

        <div class="absolute bottom-0 left-0 opacity-40 w-[600px] h-[200px] bg-[#512FEB]/50 rounded-full blur-[120px] "></div>

    </section>

</template>


<script setup lang="ts">
import { ref, onMounted } from "vue";
import SButton from "./SButton.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "vue-router";

gsap.registerPlugin(ScrollTrigger);

const form = ref({
  name: "",
  email: "",
  message: "",
})

const router = useRouter();
const sent = ref<boolean>(false);

onMounted(() => {
  // Animation du titre
  gsap.fromTo(
    '.contact-title',
    {
      opacity: 0,
      x: -50,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-title',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );

  // Animation du formulaire
  gsap.fromTo(
    '.contact-form',
    {
      opacity: 0,
      scale: 0.95,
      y: 50,
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );

  // Animation des inputs au focus
  const inputs = document.querySelectorAll('.form-input, .form-textarea');
  inputs.forEach((input: any) => {
    input.addEventListener('focus', () => {
      gsap.to(input, {
        boxShadow: '0 0 20px rgba(81, 47, 235, 0.6)',
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    input.addEventListener('blur', () => {
      gsap.to(input, {
        boxShadow: '0 0 0px rgba(81, 47, 235, 0)',
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });

  // Animation des infos de contact
  gsap.fromTo(
    '.contact-info',
    {
      opacity: 0,
      x: -30,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
});

</script>

