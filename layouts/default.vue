<template lang="pug">
    v-app
        //- noise
        #noise
        //- curser
        #curser
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
