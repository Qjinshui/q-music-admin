import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import router from "./router/index.js";
import store from "./store/index.js";
import './permission.js'



const myApp = createApp(App)
myApp.use(router)
myApp.use(store)
myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})

myApp.mount('#app')
