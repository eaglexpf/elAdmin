import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	isCollapse:false,
	lineHeight:'50px',
	uuid:'',
	jwtToken:'',
}

const getters = {
	isCollapse:function (state) {
		return state.isCollapse
	},
	uuid:function (state) {
		return state.uuid
	},
	jwtToken:function (state) {
		return state.jwtToken
	}
}

const mutations = {
	changeIsCollapse:function (state) {
		state.isCollapse = !state.isCollapse
	},
	setUUID:function (state,uuid) {
		state.uuid = uuid
	},
	setJWTToken:function (state,token) {
		state.jwtToken = token
	}
}

const actions = {

}

export default new Vuex.Store({
	state,getters,mutations,actions
})