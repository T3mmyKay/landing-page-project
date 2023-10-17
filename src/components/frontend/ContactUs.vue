<template>
    <section id="contact" class="bg-bookmark-purple text-white py-20">
        <div class="container">
            <div class="sm:w-3/4 lg:w-2/4 mx-auto">
                <p class="font-light uppercase text-center mb-8">35,000+ ALREADY JOINED</p>
                <h1 class="text-3xl text-center">Stay up to date with what we're doing</h1>
                <div class="flex flex-col sm:flex-row gap-6 mt-8">
                    <input type="text" name="email" id="" placeholder="Enter your email address" class="focus:outline-none flex-1 px-2 py-3 rounded-md text-black">
                    <button-com class="bg-bookmark-red hover:bg-bookmark-white hover:text-bookmark-blue transition ease-in-out duration-300 hover:scale-110">Submit</button-com>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import ButtonCom from "../ui/ButtonCom.vue";
</script>

<style scoped>

</style>