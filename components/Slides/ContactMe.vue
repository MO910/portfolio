<template lang="pug">
    .ContactMe.Slide
        div.bgHead.pt-12.split
            h1.text-capitalize #[splitter(text='contact me')]
            h2.text-center #[splitter(text='Have a project?')]
        v-container
            v-form(v-model="valid" lazy-validation)
                v-row
                    v-col(color='white')
                        p What can we do for you?
                    br
                    v-col(v-for='service in services' :key='service')
                        v-btn(outlined) {{service}}
                v-row
                    v-col
                        p(color='white') Budget in USD
                    br
                    v-col(v-for='budget in budgets' :key='budget')
                        v-btn(outlined) {{budget}}
                v-row(justify='space-between')
                    v-col.pl-0 #[v-text-field(v-model="name" clearable label="Your name").curser_hover_active]
                    v-col #[v-text-field(v-model="email" clearable :rules="emailRules" label="Your e-mail").curser_hover_active]
                v-row 
                    v-col.pl-0 #[v-textarea(label="project details" auto-grow rows="3" row-height="15").curser_hover_active]
                //- v-row 
                //-     v-col #[v-file-input(truncate-length="10" label="" counter multiple show-size small-chips)]
</template>

<script>
import splitter from "@/components/splitter";
export default {
    data: () => ({
        name: "",
        email: "",
        file: "",
        valid: "",
        emailRules: [
            (v) => !!v || "E-mail is required",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        services: ["design", "full stack", "other"],
        budgets: ["under 500", "1k - 2k", "2k - 5k", "5k+"],
    }),
    components: { splitter },
};
</script>

<style scoped lang="sass">
@import "@/assets/style/ContactMe"
</style>
