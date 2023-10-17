<template>
    <section id="features" class="bg-bookmark-white py-20 mt-20 lg:mt-60">
        <SectionHeading>
            <template #title>features</template>
            <template #description>Our aim is to make it quick and easy for you to access your favourite websites. Your
                bookmarks sync your
                devices so you can access them on the go.
            </template>
        </SectionHeading>
        <Feature position="left" img="illustration-features-tab-1.png" class="lg:mt-24">
            <template #header>Bookmark in one click</template>
            <template #default>
                Organize your bookmarks however you like. Our simple drag-and-drop interface gives you
                complete
                control over how you manage your favourite sites.
            </template>
        </Feature>
        <Feature position="right" img="illustration-features-tab-2.png" class="lg:mt-52">
            <template #header>Intelligent search</template>
            <template #default>
                Our powerful search feature will help you find saved sites in no time at all. No need to crawl
                through all your bookmarks.
            </template>
        </Feature>
        <Feature img="illustration-features-tab-3.png" class="lg:mt-52" position="left">
            <template #header>Share your bookmarks</template>
            <template #default>
                Easily share your bookmarks and collections with others. create a sharable link that you can send at the
                click of a button
            </template>
        </Feature>
    </section>
</template>

<script setup>
import Feature from "../ui/Feature.vue";
import SectionHeading from "../ui/SectionHeading.vue";
</script>

<style scoped>

</style>