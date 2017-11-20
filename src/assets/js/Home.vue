<template>
<div>
  <h1 class="red">{{msg}}</h1>
  <button @click="changeMessage">Change</button>
  </div>
</template>

<script>
    export default {
        data: function () {
            return {
            msg: 'Hello world!'
            }
        },
        methods: {
            changeMessage() {
                this.msg = "Ciaoooooo"
            }
        }
    }
    </script>

<style>
  .red {
    color: #f00;
  }
</style>

