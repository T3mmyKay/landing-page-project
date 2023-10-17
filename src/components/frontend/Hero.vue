<template>
    <section class="relative">
        <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-20">
            <div class="flex flex-1 flex-col items-center lg:items-start">
                <h2 class="text-bookmark-blue text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
                    Book manager
                </h2>
                <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6">
                    A clean and simple interface to organize your favourite webstes. Open a new browser tab and set load
                    instantly. Try it for free
                </p>
                <div class="flex justify-center flex-wrap gap-6">
                    <button-com type="button" class="btn-purple">Get it on chrome</button-com>
                    <button-com type="button" class="btn-white">Get it on firefox</button-com>
                </div>
            </div>
            <ImageCom img="hero-bg.png"/>
        </div>
        <div class="absolute hidden md:block overflow-hidden bg-bookmark-purple rounded-l-full h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"></div>
    </section>
</template>

<script setup>

import ButtonCom from "../ui/ButtonCom.vue";
import ImageCom from "../ui/ImageCom.vue";
</script>

<style scoped>

</style>