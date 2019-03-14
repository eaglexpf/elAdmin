import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	isCollapse:false,
	lineHeight:'50px',
}

const getters = {
	isCollapse:function (state) {
		return state.isCollapse
	}
}

const mutations = {
	changeIsCollapse:function (state) {
		state.isCollapse = !state.isCollapse
	}
}

const actions = {

}

export default new Vuex.Store({
	state,getters,mutations,actions
})