


// Define a new component Parent Component hello world 
Vue.component('hello-world', {
  props: ['name','tel'],
  template: `<h1> Hello {{ name }} 
  					<telephone :tel='tel'></telephone>
  			 </h1>`,
  data: function () {
    return {
    	name: '',
    	tel:''
    }
  },

})

// Define a new CHILD component
Vue.component('telephone', {
  props: ['tel'],
  template: `<b>{{ tel }}</b>`,
  data: function () {
    return {
    	tel: '',
    }
  }

})