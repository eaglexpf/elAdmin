import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	isCollapse:false,
	lineHeight:'50px',
	uuid:'',
	jwtToken:'',
  isLogin:false
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
	},
  isLogin:function (state) {
    return state.isLogin
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
	},
  setIsLogin:function (state,data) {
    state.isLogin = data
  }
}

const actions = {

}

export default new Vuex.Store({
	state,getters,mutations,actions
})
