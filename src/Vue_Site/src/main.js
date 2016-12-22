import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  /*
   render: function(createElement) {
     return createElement(App)
   } // ES5 way 
  */
  render: h => h(App) // ES6 way, see bit.ly/2ih2aNp
})