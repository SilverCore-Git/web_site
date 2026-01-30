<template>
    
    <div class="min-h-screen bg-[#222326]">

      <div class="h-30 bg-[#222326]"></div>

      <div class="iframe-container">
        <iframe 
            src="https://silvercore.cronitorstatus.com/" 
            frameborder="0"
            scrolling="no"
            class="full-height-iframe"
        />
      </div>

      <footer class="p-12 text-center text-gray-500 text-xs bg-[#222326]">
        &copy; 2026 Silvercore host - Tous droits réservées.
      </footer>

    </div>

</template>

<style scoped>
.iframe-container {
  width: 100%;
  overflow: hidden; 
}

.full-height-iframe {
  width: 100%;
  height: 1000px; 
  border: none;
  pointer-events: auto;
}

:deep(.viewport) {
  height: auto !important;
}
</style>