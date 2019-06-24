const state = {
	userInfo:uni.getStorageSync('userInfo'),
	city:"北京",
	//#ifdef H5
	signState:uni.getStorageSync('signState') || false,
	//#endif
	signState:uni.getStorageSync('signState') || {},
	sing: uni.getStorageSync("sing") || 0,
	setting: uni.getStorageSync("setting") || {},
	// 手势密码
	psWord: uni.getStorageSync("word") || "",
	pwState: true,
	systeminfo:""
}
const mutations = {
	setUserinfo(state, value) {
		uni.setStorageSync("userInfo", value)
		state.userInfo = value
	},
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
	async Times() {
		let data = new Date()
		var oYear = data.getFullYear()
		var oMonth = data.getMonth()+1 
		var oDay = data.getDate()
		var timer = oYear +'-'+ oMonth +'-'+ oDay
		return timer
	},
	
	async isDay({dispatch}, data) {
		console.log(data)
		var falg = ""
		await dispatch("Times").then((res) => {
			var oDate1= new Date(res);
			var oDate2 = new Date(data);
			if(oDate1.getTime() > oDate2.getTime()){
				console.log('+1');
				falg = 1
			} else {
				falg = 2
				console.log('1');
			}
		})
		if(falg === 1) {
			return true
		}else if(falg === 2) {
			return false
		}
	},
}

export default {
	state,
	mutations,
	actions
}