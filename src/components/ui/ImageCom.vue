<template>
    <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
        <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" :src="`/images/${img}`" alt="">
    </div>
</template>

<script setup>
defineProps(['img'])
</script>

<style scoped>

</style>