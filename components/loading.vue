<template lang="pug">
    .loading-page(v-if="loading" v-text="text") Loading...
</template>

<script>
export default {
    data: () => ({
        loading: false,
        text: 0,
    }),
    methods: {
        start() {
            console.log("start");
            this.loading = true;
        },
        finish() {
            console.log("finish");
            this.loading = false;
        },
        increase(per) {
            this.text = per;
            console.log(per);
        },
    },
};
</script>

<style scoped>
.loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
    color: #fff;
}
</style>
