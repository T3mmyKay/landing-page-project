<template>
    <div class="relative mt-20">
        <div class="container flex flex-col items-center justify-center gap-x-24"
             :class="{'lg:flex-row-reverse':position==='right','lg:flex-row':position==='left'}">
            <ImageCom :img="img"/>
            <div class="flex flex-1 flex-col items-center lg:items-start">
                <h1 class="text-3xl text-bookmark-blue">
                    <slot name="header"></slot>
                </h1>
                <p class="text-bookmark-grey my-4 text-center lg:text-left sm:3/4 lg:w-full">
                    <slot></slot>
                </p>
                <button-com class="btn-purple">More info</button-com>
            </div>
        </div>
        <div class="absolute hidden lg:block overflow-hidden bg-bookmark-purple h-80 w-2/4 -bottom-24"
             :class="{'rounded-r-full -left-36':position==='left','rounded-l-full -right-36':position==='right'}"></div>
    </div>

</template>

<script setup>

import ImageCom from "./ImageCom.vue";
import ButtonCom from "./ButtonCom.vue";

defineProps({
    img: {
        type: String,
        required: false,
    },
    position: {
        type: String,
        required: true
    }
})
</script>

<style scoped>

</style>