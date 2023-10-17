<template>
    <header>
        <NavbarCom />
    </header>

    <main>
        <Hero />
        <Features />
        <Download />
        <FaqCom />
        <ContactUs />
    </main>

    <Footer />
</template>

<script setup>

import NavbarCom from "./components/frontend/NavbarCom.vue";
import Hero from "./components/frontend/Hero.vue";
import Features from "./components/frontend/Features.vue";
import Download from "./components/frontend/Download.vue";
import FaqCom from "./components/frontend/FaqCom.vue";
import ContactUs from "./components/frontend/ContactUs.vue";
import Footer from "./components/frontend/Footer.vue";
</script>

<style scoped></style>