<template>
    <div class="flex">
        <span>{{ displayedText }}</span>
        <div class="cursor">|</div>
    </div>
</template>

<script setup lang="ts">

import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps<{
    words?: string[]
}>();

const words: string[] = props.words || [
    "mot 1",
    "mot 2",
    "mot 3",
];

const typingSpeed: number = 100;
const wordDisplayDelay: number = 1000;

const displayedText = ref<string>("");
let index: number = 0;
let charIndex: number = 0;
let interval: any = null;

function typeWord()
{
    const currentWord = words[index];
    if (!currentWord) return;

    interval = setInterval(() => {
        
        displayedText.value += currentWord[charIndex]
        charIndex++

        if (charIndex === currentWord.length) {
            clearInterval(interval)
            setTimeout(undoWord, wordDisplayDelay)
        }

    }, typingSpeed)
}

function nextWord()
{
    index = (index + 1) % words.length
    displayedText.value = ""
    charIndex = 0
    typeWord()
}

function undoWord()
{
    interval = setInterval(() => {
        
        displayedText.value = displayedText.value.slice(0, -1);
        charIndex--;

        if (charIndex < 0) {
            clearInterval(interval);
            setTimeout(nextWord, wordDisplayDelay);
        }

    }, typingSpeed)
}


onMounted(() => {
    typeWord()
})

onBeforeUnmount(() => clearInterval(interval))

</script>

<style scoped>
.cursor {
    animation: blink 1s infinite;
    margin-left: 3px;
    font-weight: bold;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}
</style>