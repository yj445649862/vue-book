import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/demos',
      component:()=>import('../pages/layout'),
      children:[
        // {
        //   path:'/demos/dashboard',
        //   component:()=>import('../pages/dashboard/Dashboard')
        // },
        {
          path:'*',
          component:()=>import('../pages/Lost')
        }
      ]
    }
  ]
})