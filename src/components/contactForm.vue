<template>

    <section id="contact" class="py-20 relative overflow-hidden">

        <div class="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-14">

            <div>

                <h2 class="text-[24px] sm:text-[36px] md:text-[40px] font-bold mb-6">
                    Demandez tout ce qui vous passe par la tête.
                </h2>

                <p class="text-white/70 mb-10">
                    Contactez Silvercore dès maintenant : nous répondons à toutes vos questions.
                </p>

                <div class="space-y-6">

                    <div class="flex items-center gap-3 text-white/70">
                        <i class="bi bi-envelope" />
                        <a 
                            href="mailto:contact@silvercore.fr" 
                            class="hover:text-white transition"
                        >
                            contact@silvercore.fr
                        </a>
                    </div>

                    <div class="flex items-center gap-3 text-white/70">
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
                @submit.prevent="handleSubmit" 
                class="space-y-6 backdrop-blur-lg bg-white/5 p-6 rounded-xl border border-white/10 relative pointer-events-none"
            >

                <div class="absolute inset-0 pb-6 bg-black/60 z-100 pointer-events-none">
                    <h2 class="absolute inset-0 flex justify-center items-center -rotate-40 text-5xl font-semibold text-(--primary) uppercase">A venir</h2>
                </div>

                <div>
                    <label class="block text-white mb-2">Nom</label>
                    <input 
                        v-model="form.name" required 
                        placeholder="Jean Moulin"
                        class="
                            w-full px-4 py-2 rounded 
                            bg-white/10 text-white placeholder-white/40
                            outline-none focus:ring-2 focus:ring-[#512FEB]
                        "   
                    />
                </div>

                <div>
                    <label class="block text-white mb-2">Email</label>
                    <input 
                        type="email" 
                        v-model="form.email" 
                        required 
                        placeholder="moi@silvercore.fr"
                        class="
                            w-full px-4 py-2 rounded 
                            bg-white/10 text-white placeholder-white/40 
                            outline-none focus:ring-2 focus:ring-[#512FEB]
                        "
                    />
                </div>

                <div>
                    <label class="block text-white mb-2">Message</label>
                    <textarea 
                        v-model="form.message" 
                        required 
                        placeholder="Bonjour, je cherche un..."
                        class="
                            w-full px-4 py-2 h-32 rounded outline-none
                            bg-white/10 text-white placeholder-white/40
                            focus:ring-2 focus:ring-[#512FEB]"
                    ></textarea>
                </div>

             
                <SButton
                    type="submit"
                    content="Envoyer"
                    :arrow="false"
                    class="w-full cursor-pointer"
                />

                <p v-if="sent" class="text-green-400 text-sm mt-2">Message envoyé ✔</p>
            </form>

        </div>

        <div class="absolute -bottom-60 -left-20 opacity-40 w-[800px] h-[600px] bg-[#512FEB]/40 rounded-full blur-[120px] -z-1"></div>

    </section>

</template>


<script setup lang="ts">
import { ref } from "vue";
import SButton from "./SButton.vue";


const form = ref({
  name: "",
  email: "",
  message: "",
})

const sent = ref(false)

async function handleSubmit() {
  console.log("Données envoyées :", form.value)


  sent.value = true
  setTimeout(() => sent.value = false, 3000)
  form.value = { name:"", email:"", message:"" }
}

</script>

