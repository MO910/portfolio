<template lang="pug">
    v-app
        //- invers
        #invers1
        #invers2
        include ../static/svg/bobble.pug
        //- noise
        #noise
        //- curser
        #curser
        #outerCurser
        //- app header navbar
        appBar
        //- the applecation
        Nuxt
        //- js scripts
        script(src='js/curser.js'  type='module')
</template>

<script>
import appBare from "@/components/appBar";
export default {
    components: { appBare },
};
</script>
<style lang="sass" scoped>
@import "@/assets/style/layout"
</style>
