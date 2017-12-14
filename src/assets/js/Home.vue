<template>
<div>
    <message v-for="message in 5"></message>
</div>
</template>

<script>
    import Message from './Message.vue';
    export default {
        components: {
            "message": Message
        }
    }
    </script>

<style>
  .red {
    color: green;
  }
</style>

