const state = {
	signState:uni.getStorageSync('signState'),
	userInfo:uni.getStorageSync('suserInfo'),
	city:"北京"
}
const mutations = {
	setCity(state, value){
		state.city = value
	}
}
const actions = {
	
}

export default {
	state,
	mutations,
	actions
}