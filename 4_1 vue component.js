// Define a new component called button-counter
Vue.component('button-counter', {
  props: ['title'],
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++"> {{title}} You clicked me {{ count }} times.</button>'
})