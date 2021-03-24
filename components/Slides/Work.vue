<template lang="pug">
    .Slide
        .bgHead
            h1.text-capitalize.bigFont #[splitter(text='work')]
        v-container.container--fluid
            v-row(align='center')
                v-col(v-for="poject in pojects" :key="poject" cols=3)
                    v-card
                        v-img(:src="poject.img")
                        v-card-subtitle(v-text='poject.date')
                        v-card-subtitle(v-text='poject.sub')
                        v-card-title(v-text='poject.title')
</template>

<script>
import splitter from "@/components/splitter";
export default {
    data: () => ({
        pojects: [
            {
                title: "architecture",
                sub: "foo co.",
                date: "nov 2020",
                img: "imgs/architecture.jpg",
            },
            {
                title: "bongiorno",
                sub: "restaurant",
                date: "sep 2020",
                img: "imgs/food.jpg",
            },
            {
                title: "checkmate",
                sub: "chess club",
                date: "jun 2020",
                img: "imgs/chess.jpg",
            },
        ],
    }),
    components: { splitter },
    // props: ["active"],
};
</script>

<style scoped lang="sass">
.bgHead
    position: absolute
.container
    height: 100%
    z-index: 2
    position: relative
    .row
        height: 100%
</style>
