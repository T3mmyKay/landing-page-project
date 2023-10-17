<template>
    <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-bookmark-blue capitalize">
            <slot name="title"/>
        </h1>
        <p class="text-center text-bookmark-grey mt-4">
            <slot name="description"/>
        </p>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>