<template>
    <footer class="text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <!-- Logo et description -->
          <div>
            <img src="../assets/logo.png" alt="Logo" class="w-32 mb-4">
            <p class="text-sm text-gray-400">
              Nous fournissons des services open-source, ethique et respectieux de la vie privée.
            </p>
          </div>
  
          <!-- Liens rapides -->
          <div>
            <h5 class="text-lg font-semibold mb-4">Liens utiles</h5>
            <ul class="text-gray-400">
              <li><a href="/#accueil" class="hover:text-blue-500">Accueil</a></li>
              <li><a href="/#services" class="hover:text-blue-500">Nos services</a></li>
              <li><a href="/#projets" class="hover:text-blue-500">Nos projets</a></li>
              <li><a href="/#contact" class="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          <!-- Suivez-nous -->
          <div>
            <h5 class="text-lg font-semibold mb-4">Suivez-nous</h5>
            <div class="flex space-x-4">
              <a target="_blank" href="https://discord.gg/ftFhQTJsQ5" class="text-gray-400 hover:text-blue-500">
                <i class="bi bi-discord fa-2x"></i>
              </a>

              <a target="_blank" href="https://www.instagram.com/silvercore_fr/" class="text-gray-400 hover:text-blue-500">
                <i class="bi bi-instagram fa-2x"></i>
              </a>
            </div>
          </div>
  
          <!-- Contact -->
          <div>
            <h5 class="text-lg font-semibold mb-4">Contact</h5>
            <p class="text-gray-400">
              Email: <a href="mailto:silverdium@hotmail.com" class="hover:text-blue-500">silverdium@hotmail.com</a>
            </p>
          </div>
  
        </div>
      </div>
  
      <!-- Copyright -->
      <div class="py-4 mt-8">
        <div class="container mx-auto text-center text-sm text-gray-400">
          <p>&copy; 2025 SilverCore. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
    footer {
        background-color: rgb(6, 0, 27);
    }
  </style>
  