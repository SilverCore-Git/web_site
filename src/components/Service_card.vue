<template>

    <div
        class="content_service"
    >
        <h1>{{ title }}</h1>
    </div>

</template>

<script lang="ts" setup>

defineProps<{
    title: string;
}>();

</script>

<style scoped>

.content_service {
    background-color: rgba(255, 255, 255, 0.06);

    height: 600px;
    width: 578px;

    border: 1.5px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

</style>