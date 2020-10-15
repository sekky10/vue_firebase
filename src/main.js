import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyCYvzWi2OibgZPhlcaYQunejOB8e8kHR3g",
  authDomain: "my-address-29fe6.firebaseapp.com",
  databaseURL: "https://my-address-29fe6.firebaseio.com",
  projectId: "my-address-29fe6",
  storageBucket: "my-address-29fe6.appspot.com",
  messagingSenderId: "109862668645",
  appId: "1:109862668645:web:cb9b64d9fe61351498f98c",
  measurementId: "G-E8SS8R78M9"
};
// Initialize Firebase
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
