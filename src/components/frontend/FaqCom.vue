<template>
    <section class="bg-bookmark-white py-20">
        <div class="container">
            <SectionHeading>
                <template #title>frequently asked questions</template>
                <template #description>Here are some of our FAQs. If you have any other questions you'd like to answered
                    please feel free to email us.
                </template>
            </SectionHeading>
            <div class="flex flex-col sm:w-3/4 lg:5/12 mt-12 mx-auto">
                <faq-item>
                    <template #default>What is a bookmark</template>
                </faq-item>
                <faq-item>
                    <template #default>How can I request a new bookmark</template>
                </faq-item>
                <faq-item>
                    <template #default>Is there a mobile app</template>
                </faq-item>
                <faq-item>
                    <template #default>What about other Chromium browsers</template>
                </faq-item>
                <button-com class="mt-12 btn-purple flex self-center">More info</button-com>
            </div>
        </div>
    </section>
</template>

<script setup>

import SectionHeading from "../ui/SectionHeading.vue";
import FaqItem from "../ui/FaqItem.vue";
import ButtonCom from "../ui/ButtonCom.vue";
</script>

<style scoped>

</style>