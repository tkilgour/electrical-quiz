import Vue from 'vue'
import Router from 'vue-router'
import StartScreen from './components/StartScreen.vue'
import Quiz from './components/Quiz.vue'

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
      component: Quiz
    }
  ]
})
