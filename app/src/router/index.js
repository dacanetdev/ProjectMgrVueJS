import Vue from 'vue'
import Router from 'vue-router'
import ProjectList from '@/projects/ProjectList'
import Dashboard from '@/dashboard/Dashboard'
import UserList from '@/users/UserList'
import ThumbNailList from '@/gallery/ThumbNailList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Gallery',
      component: ThumbNailList
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'ProjectList',
      component: ProjectList
    },
    {
      path: '/users',
      name: 'UserList',
      component: UserList
    }
  ]
})
