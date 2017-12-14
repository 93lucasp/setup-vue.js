<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        user name: {{userName}} <br>
        user age: {{userAge}} <br>
        <!-- switched name: {{switchName()}} -->
        <button @click="resetName()">Reset name</button>
        <button @click="resetFn()">Reset name</button>
    </div>
</template>

<script>
    export default {
        props: {
            userName: {
                type: String,
                required: true,
                // default: "ALEX"
            },
            userAge: Number,
            resetFn: Function
        },
        methods: {
            // switchName() {
            //     return this.name.split("").reverse().join("");
            // },
            resetName() {
                this.name = "Luca";
                this.$emit("nameWasReset", this.name);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
