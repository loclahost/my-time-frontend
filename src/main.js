import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import VueSidebarMenu from 'vue-sidebar-menu'

import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'

// Import all of Bootstrap's JS
//import * as bootstrap from 'bootstrap'

import routes from './routes'
import App from './App.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes.navigation
  })

let app = createApp(App)
app.use(router)
app.use(VueSidebarMenu)
app.mount('#app')
