<template lang="pug">
    v-app-bar.pt-6(app flat color='transparent')
        v-container
            v-row(justify='space-between' aling='center')
                div.logo
                    v-img(src="svg/logo.svg", alt="logo" width='100%')
                div.menu
                    include ../static/svg/menu.pug
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import "@/assets/style/appBar"
</style>
