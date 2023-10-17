<template>
    <header>
        <nav class="container flex items-center py-4 mt-4 sm:mt-12">
            <div class="py-1">
                <img src="/images/logo-bookmark.svg" alt="">
            </div>
            <div class="fixed inset-0 z-50 h-screen w-screen bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 sm:hidden"
                 :class="classObject">
                <div class="container pt-16 items-center dark:text-white text-black text-4xl flex justify-end">
                    <span @click="mobileMenu = !mobileMenu">&times;</span>
                </div>
                <div class="w-10/12 mx-auto mt-16 flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none"
                     :class="classObject2">
                    <div class="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
                        <ul class="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                            <li class="">
                                <a @click="scrollToElement('features')"
                                   class="block transition hover:text-primary dark:hover:text-white md:px-4">
                                    <span class="">Features</span>
                                </a>
                            </li>
                            <li class="">
                                <a @click="scrollToElement('pricing')"
                                   class="block transition hover:text-primary dark:hover:text-white md:px-4">
                                    <span class="">Pricing</span>
                                </a>
                            </li>
                            <li class="">
                                <a @click="scrollToElement('contact')"
                                   class="block transition hover:text-primary dark:hover:text-white md:px-4">
                                    <span class="">Contact</span>
                                </a>
                            </li>
                            <li class="flex-1">
                                <button type="button" class="bg-bookmark-red text-white rounded-md px-3 py-2 capitalize">Login</button>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
                <NavLink title="features"/>
                <NavLink title="pricing"/>
                <NavLink title="contact"/>
                <button type="button" class="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase">Login</button>
            </ul>
            <div class="flex sm:hidden flex-1 justify-end">
                <font-awesome-icon @click="mobileMenu = !mobileMenu" icon="fa-solid fa-bars" class="text-2xl"/>
            </div>
        </nav>

    </header>

</template>

<script setup>

import NavLink from "../ui/NavLink.vue";
import { computed } from "vue";


let mobileMenu = $ref(false);


const scrollToElement = (id)=>{
    const el = document.getElementById(id);

    if(el) {
        el.scrollIntoView({behavior: "smooth"})
        mobileMenu = false;
    }
}

const classObject = computed(() => ({
    'origin-bottom scale-y-0': !mobileMenu,
    'origin-top scale-y-100': mobileMenu
}))

const classObject2 = computed(() => ({
    'visible scale-100 opacity-100': mobileMenu,
    'invisible opacity-0 scale-95': !mobileMenu
}))
</script>

<style scoped>

</style>