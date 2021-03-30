<template lang="pug">
    v-container.SlidesContainer.container--fluid.pa-0
        Heading
        Work
        ContactMe.active
        
        script(src='js/scroll.js')
        script(src='js/general.js')
</template>

<script>
// Slides
import Heading from "@/components/Slides/Heading";
import Work from "@/components/Slides/Work";
import ContactMe from "@/components/Slides/ContactMe";
export default {
    components: { Heading, Work, ContactMe },
};
</script>
<style lang="sass">
@import "@/assets/style/general"
</style>
