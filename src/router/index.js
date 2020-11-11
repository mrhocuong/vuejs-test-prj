import Vue from 'vue'
import Router from 'vue-router'
import Configuration from '@/views/Configuration'
import LeaderBoard from '@/views/leaderBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Configuration',
      component: Configuration
    },
    {
      path: '/leader-board',
      name: 'LeaderBoard',
      component: LeaderBoard
    }
  ]
})
