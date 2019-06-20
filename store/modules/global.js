const state = {
	userInfo:uni.getStorageSync('suserInfo'),
	city:"北京",
	//#ifdef H5
	signState:uni.getStorageSync('signState') || false,
	//#endif
	signState:uni.getStorageSync('signState') || false,
	sing: uni.getStorageSync("sing") || 0,
	setting: uni.getStorageSync("setting") || {},
}
const mutations = {
	setCity(state, value){
		state.city = value
	},
	setState(state, value) {
		uni.setStorageSync("signState", value)
		state.signState = value
	},
	setSing(state, value) {
		console.log(value)
		uni.setStorageSync("sing", value)
		state.sing = value
	},
	setTing(state, value) {
		console.log(value)
		uni.setStorageSync("setting", value)
		state.setting = value
	}
}
const actions = {
	
}

export default {
	state,
	mutations,
	actions
}