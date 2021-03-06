import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
