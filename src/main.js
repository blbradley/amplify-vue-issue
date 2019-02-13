import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { ServiceWorker } from 'aws-amplify'
const myServiceWorker = new ServiceWorker()

console.log(myServiceWorker)

ServiceWorker = this.serviceWorker.register('/service-worker.js', '/');

new Vue({
  render: h => h(App),
}).$mount('#app')
