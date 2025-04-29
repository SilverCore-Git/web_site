<template lang="html">
    <a :href="href" class="btn">{{ name }}</a>
</template>

<script lang="ts" setup>

    defineProps({
        href: {
            type: String,
            default: '/'
        },
        name: {
            type: String,
            default: 'nom du btn'
        }
    })
</script>
<style lang="css" scoped>
.btn {
    display: inline-block;
    padding: 12px 25px;
    background: #5543a4;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    border-radius: 8px;
    transition: background 0.3s ease-in-out;
}

.btn:hover {
    background: #371ea5;
}
</style>