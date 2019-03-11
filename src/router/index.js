import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '@/components/login'
import layout from '@/components/layout'
import home from '@/components/home'
import model from '@/components/rbac/model'

export default new Router({
	routes:[
		{
			path:'/login',
			name:'login',
			component:login
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
					path:'model',
					component:model
				}
			]
		}
	]
})
