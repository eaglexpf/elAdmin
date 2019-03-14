import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '@/components/login'
import layout from '@/views/layout/layout'
import home from '@/components/home'
import aaa from '@/components/layout'
import model from '@/components/rbac/model'

import auth from '@/views/auth/auth'

export default new Router({
	routes:[
		{
			path:'/login',
			name:'login',
			component:login
		},
		{
			path:'/aaa',
			name:'aaa',
			component:aaa
		},
		{
			path:'/',
			component:layout,
			children:[
				{
					path:'',
					component:home
				},
				{
					path:'auth',
					component:auth
				},
				{
					path:'model',
					component:model
				}
			]
		}
	]
})
