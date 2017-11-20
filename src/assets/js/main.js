var Vue = require('vue')
var App = require('./App.vue')
var Home = require('./Home.vue')

Vue.component('vue-message', Home);


new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement(App)
    }
})