// Define a new component called button-counter
Vue.component('say-hello', {
  props: ['title'],
  data: function () {
    return {
      count: 0
    }
  },
  
  
  methods: {
  	sayHello() {
  		alert('hello');
  	}
  },  
  
  template: `<div>
				<div @hello="sayHello" @click='sayHello'>
					<button-counter></button-counter>
				</div>
				
			</div>`
})