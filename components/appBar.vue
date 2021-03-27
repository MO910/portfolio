<template lang="pug">
    .appBar
        v-app-bar.pt-6(app flat color='transparent')
            v-container
                v-row(justify='space-between' aling='center')
                    div.logo.curser_pointer_active
                        v-img(src="svg/logo.svg", alt="logo" width='100%')
                    div.menuIcon.curser_pointer_active
                        include ../static/svg/menu.pug
        .menu
            v-container
                v-row(aling='center')
                    v-col(cols=10)
                        v-row(v-for='li in menu' :key='li' aling='center').curser_hover
                            v-col.text-h1.text-center.text-capitalize {{li}}
                    v-col(cols=2 aling='center')
                        div.close.curser_pointer
                            include ../static/svg/close.pug
        script(src='js/appBar.js' type='module')
</template>

<script>
export default {
    data: () => ({
        menu: ["home", "work", "about", "contact"],
    }),
};
</script>

<style lang="sass" scoped>
@import "@/assets/style/appBar"
</style>
