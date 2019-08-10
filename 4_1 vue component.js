// Define a new component called button-counter
Vue.component('button-counter', {
  props: ['title'],
  data: function () {
    return {
      count: 0
    }
  },
  template: `<div>
				<button @click="count++">{{title}} You clicked me {{ count }} times.</button>
				<button @click="$emit('hello')"> say hello to parent</button>
			</div>`
})