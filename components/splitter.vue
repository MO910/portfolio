<template lang="pug">
    .splitter
        span.word(v-for="word in text.split(' ').map((text, index) => (index ? ` ${text}` : text).split(''))")
            span.char(v-for="char in word") {{char}}

</template>

<script>
export default {
    data: () => ({}),
    methods: {},
    props: ["text", "shuffle", "duration"], // char, word, line
};
</script>

<style scoped></style>
