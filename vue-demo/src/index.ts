import Vue from 'vue';
// import Hello from './components/Hello.vue'

new Vue({
  el: '.app',
  data: {
    name: 'TypeScript'
  },
  template: '<h1>Hello {{ name }}</h1>'
});