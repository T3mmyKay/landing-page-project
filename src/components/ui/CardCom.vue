<template>
    <div class="flex flex-col rounded-md shadow-md">
        <div class="p-6 flex flex-col items-center">
            <img :src="`/images/${img}`" alt="chrome-logo">
            <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">
                <slot name="header"/>
            </h3>
            <p class="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
        </div>
        <hr class="border-b border-bookmark-white"/>
        <div class="flex p-6">
            <button-com class="btn-purple flex-1">Add & Install Extension</button-com>
        </div>
    </div>
</template>

<script setup>

import ButtonCom from "./ButtonCom.vue";

defineProps({
    img: String,
})
</script>

<style scoped>

</style>