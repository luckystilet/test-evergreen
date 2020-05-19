import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('./views/Home.vue'),
      props: (route) => ({ query: route.query.p })
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import('./views/User.vue')
    },
  ]
})

export default router
