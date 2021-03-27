<template lang="pug">
    .Slide
        .bgHead
            h1.text-capitalize.bigFont #[splitter(text='work')]
        v-container.container--fluid
            v-row(align='center')
                v-spacer
                v-col(v-for="poject in pojects" :key="poject.title" cols=3)
                    v-card.text-capitalize
                        v-img(:src="poject.img")
                        v-card-subtitle(v-text='poject.date')
                        .title
                            v-card-subtitle.pb-0(v-text='poject.sub')
                            v-card-title.pt-0.text-h4(v-text='poject.title')
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
@import "@/assets/style/Work"
</style>
