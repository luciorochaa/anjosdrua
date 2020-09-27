import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes/routes.js'
import VueRouter from 'vue-router'
import firebase from 'firebase'

Vue.use(VueRouter)

var firebaseConfig = {
  apiKey: "AIzaSyBiC9yfkIbdDH7qN-VR16558WV73408hGA",
  authDomain: "anjos-d-rua.firebaseapp.com",
  databaseURL: "https://anjos-d-rua.firebaseio.com",
  projectId: "anjos-d-rua",
  storageBucket: "anjos-d-rua.appspot.com",
  messagingSenderId: "811024774465",
  appId: "1:811024774465:web:e7af9f08eccc301f439dc0",
  measurementId: "G-HSD6TFCY3E"
};

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'  
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
