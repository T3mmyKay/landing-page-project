<template>
    <div class="flex items-center border-b py-4">
        <span class="flex-1"><slot/></span>
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-bookmark-purple"/>
    </div>
</template>

<script setup>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<style scoped>

</style>