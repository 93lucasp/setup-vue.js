<template>
 <!-- <vue-message></vue-message> -->
  <div class="container">
      <div class="row">
          <div class="col-12">
              <app-user></app-user>
          </div>
      </div>
  </div>
</template>

<script>
    import User from './components/User.vue';

    export default {
        components: {
            appUser: User
        }
    }
</script>

<style>
  .red {
    color: yellow;
  }
</style>

