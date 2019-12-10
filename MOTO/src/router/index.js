import Vue from "vue"
import Router from "vue-router"
import App from "../App.vue"
import MOTO from "../MOTOBike.vue"
import header from "@/components/header.vue"

Vue.use(Router)

export default new Router({
   routes: [
      {
         path: '/',
         name: '/header',
         components: header
      },

      {
         path: '/App',
         name: 'App',
         components: App

      },
      {
         path: '/MOTO',
         name: 'MOTO',
         components: MOTO
      }
   ]
})