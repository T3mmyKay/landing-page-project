<template>
    <section class="py-20 mt-20">
        <SectionHeading>
            <template #title>Download the extension</template>
            <template #description>We've got more browsers in the pipeline. Please do let us know if you've got a
                favourite you'd like us to prioritize.
            </template>
        </SectionHeading>

        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
            <CardCom img="logo-chrome.svg" class="lg:mb-16">
                <template #header>
                    Add to chrome
                </template>
            </CardCom>
            <CardCom img="logo-firefox.svg" class="lg:my-8">
                <template #header>
                    Add to firefox
                </template>
            </CardCom>
            <CardCom img="logo-opera.svg" class="lg:mt-16">
                <template #header>
                    Add to opera
                </template>
            </CardCom>
        </div>
    </section>
</template>

<script setup>

import SectionHeading from "../ui/SectionHeading.vue";
import CardCom from "../ui/CardCom.vue";
</script>

<style scoped>

</style>