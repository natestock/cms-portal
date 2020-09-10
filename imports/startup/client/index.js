import { Meteor } from 'meteor/meteor';
import Vue from 'vue';

// Install Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// Import router file
import router from './routes' 

// Install BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue);
// Install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// App entry component
import App from '../../ui/App.vue';
 
Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
    router
  });
});