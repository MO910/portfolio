<template lang="pug">
    .ContactMe.Slide
        div.bgHead.pt-12.split
            h1.text-capitalize #[splitter(text='contact me')]
            h2 #[splitter(text='Have a project?')]
        v-container
            v-form(v-model="valid" lazy-validation)
                v-row
                    v-col #[v-text-field(v-model="name" clearable label="Your name").curser_hover_active]
                    v-col #[v-text-field(v-model="email" clearable :rules="emailRules" label="Your e-mail").curser_hover_active]
                v-row 
                    v-col #[v-textarea(label="project details" auto-grow rows="3" row-height="15").curser_hover_active]
                //- v-row 
                    //- v-col #[v-file-input(truncate-length="10" label="" counter multiple show-size small-chips)]
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
    }),
    components: { splitter },
};
</script>

<style scoped lang="sass">
@import "@/assets/style/ContactMe"
</style>
