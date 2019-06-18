var WEEK_NAME = ['周一', '周二', '周三', '周四', '周五', '周六', '周日', '周一', '周二', '周三', '周四', '周五', '周六', '周日']

function tip(str) {
	uni.showToast({
		title: str,
		icon:"none",
		duration:5000
	})
}

function tips(str) {
	uni.showToast({
		title: str,
		icon:"success",
		duration:2000
	})
}

function Loding(str) {
	uni.showLoading({
		title:str,
		mask:true
	})
}

function HideLoding() {
	uni.hideLoading();
}

function cutting(val){
	var strArr = val.split("~")
	return strArr
}

function humidity(h) {
    if (h) {
        return '湿度 ' + h + '%'
    }
    return h
}

function formatWeeklyDate(i) {
	var now = getDate()
	var names = ['今天', '明天', '后天']
	if (names[i]) {
		return names[i]
	}
	var curWeek = now.getDay() - 1 + i
	return WEEK_NAME[curWeek]
}

export {
	tip,
	tips,
	Loding,
	HideLoding,
	cutting,
	humidity,
	formatWeeklyDate
}