import Vue from 'vue'
import Router from 'vue-router'
import StartScreen from './components/StartScreen.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start-screen',
      component: StartScreen
    },
    {
      path: '/quiz',
      name: 'quiz',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Quiz.vue')
    }
  ]
})
