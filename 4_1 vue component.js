// Define a new component called button-counter
Vue.component('button-counter', {
  props: ['title'],
  data: function () {
    return {
      count: 0,
	  style: "font-size:10px; color:red"
    }
  },
  template: `<div> <button class='btn' :style='style'>Counter </button>
			</div>`
})