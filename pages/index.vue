<template lang="pug">
    v-container.SlidesContainer.container--fluid.pa-0
        Heading
        Work.active
        .Slide Slide 3
        //- script(src='js/split.js')
        script(src='js/general.js')
        script(src='js/scroll.js')
</template>

<script>
// Slides
import Heading from "@/components/Slides/Heading";
import Work from "@/components/Slides/Work";
export default {
    components: { Heading, Work },
};
</script>
<style lang="sass">
@import "@/assets/style/general"
</style>
