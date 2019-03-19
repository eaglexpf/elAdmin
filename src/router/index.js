import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '@/components/home'
import aaa from '@/components/layout'
import model from '@/components/rbac/model'

import login from '@/views/layout/login'
import register from '@/views/layout/register'
import layout from '@/views/layout/layout'
import auth from '@/views/auth/auth'

export default new Router({
	routes:[
		{
			path:'/login',
			name:'login',
			component:login
		},
    {
      path:'/register',
      name:'register',
      component:register
    },
		{
			path:'/',
			component:layout,
			children:[
				{
					path:'/home',
					name:'home',
					component:home
				},
				{
					path:'auth',
          name:'auth',
					component:auth
				}
			]
		}
	]
})
