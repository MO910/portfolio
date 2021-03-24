<template lang="pug">
    .Heading.Slide
        div.bgHead.pt-12.split
            h2 #[splitter(text='i am a')]
            h1.text-capitalize #[splitter(text='web')] #[splitter(text='developer')] 
        div.scroll.text-uppercase.float-right
            include ../../static/svg/scroll.pug
</template>

<script>
import splitter from "@/components/splitter";
export default {
    components: { splitter },
};
</script>

<style scoped></style>
