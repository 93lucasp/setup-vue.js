<template>
    <div class="component">
        <h3>You may edit the User here</h3>
         user age: {{userAge}} <br>
        <button @click="editAge">Edit age</button>
        <button @click="changeUserAge()">Edit age2</button>
    </div>
</template>

<script>
    export default {
        props: ['userAge','changeUserAge'],
        methods: {
            editAge() {
                this.userAge= 30;
                this.$emit('ageWasEdited', this.userAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
