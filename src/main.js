import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'



const myApp = createApp(App)
myApp.use(VueAxios,axios)
myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})

myApp.mount('#app')
