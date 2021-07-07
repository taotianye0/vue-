// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import "./assets/js/jquery.min.js";
import "./assets/js/jquery.scrollzer.min.js";
import "./assets/js/jquery.scrolly.min.js";
// import "./assets/js/skel.min.js";
import "./assets/js/util.js";
// import "./assets/js/main.js";
// import "./assets/js/ie/respond.min.js";



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
