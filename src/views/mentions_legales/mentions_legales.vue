<script setup lang="ts">

// JSON config import
import mentions_legales_config from "../config/mentions_legales_config.json";

// Component import
import JSONVueRenderer from '../../components/StructuredContent/StructuredContent-component.vue';

</script>

<template>
    <JSONVueRenderer
        :props="mentions_legales_config"
    />
</template>