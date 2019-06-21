const state = {
	userInfo:uni.getStorageSync('suserInfo'),
	city:"北京",
	//#ifdef H5
	signState:uni.getStorageSync('signState') || false,
	//#endif
	signState:uni.getStorageSync('signState') || false,
	sing: uni.getStorageSync("sing") || 0,
	setting: uni.getStorageSync("setting") || {},
	// 手势密码
	psWord: uni.getStorageSync("word") || "",
	pwState: true,
	systeminfo:""
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
		uni.setStorageSync("sing", value)
		state.sing = value
	},
	setTing(state, value) {
		uni.setStorageSync("setting", value)
		state.setting = value
	},
	setWord(state, value) {
		uni.setStorageSync("word", value)
		state.psWord = value
	},
	setPwSta(state, value) {
		state.pwState = value
	},
	setSysteminfo(state, value) {
		state.systeminfo = value
	}
}
const actions = {
	
}

export default {
	state,
	mutations,
	actions
}