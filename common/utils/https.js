const weather = 'https://free-api.heweather.net/s6/weather'
const future = 'http://v.juhe.cn/weather/index'
const air = 'https://free-api.heweather.net/s6/air/now'
const locl = 'http://apis.juhe.cn/geo/'
// 和风天气Api产品秘钥 自行去官网申请
const QQ_MAP_KEY1 = '********************************'
const QQ_MAP_KEY2 = '********************************'
const QQ_MAP_KEY3 = '********************************'


//添加finally事件
Promise.prototype.finally = function (callback) {
    var Promise = this.constructor;
    return this.then(
        function (value) {
            Promise.resolve(callback()).then(
                function () {
                    return value;
                }
            );
        },
        function (reason) {
            Promise.resolve(callback()).then(
                function () {
                    throw reason;
                }
            );
        }
    );
}

// 实况天气
function getWeather(location) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: weather+"/now",
			data: {
				location:location,
				key: QQ_MAP_KEY1
			},
			success: (res) => {
				resolve({result: res.data})
			},
			fail: (e) => {
				reject(e)
			},
			complete: (e) => {
		  	
			}
		})
	})
}
// 未来天气
function getFuture(location) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: weather+"/forecast",
			data: {
				location:location,
				key: QQ_MAP_KEY1
			},
			success: (res) => {
				resolve({result: res.data})
			},
			fail: (e) => {
				reject(e)
			},
			complete: (e) => {
		  	
			}
		})
	})
}
// 生活指数
function getLift(location) {
	return new Promise((resolve, reject) => {
	    uni.request({
	        url: weather+"/lifestyle",
	        data: {
	            location:location,
	            key: QQ_MAP_KEY1,
	        },
	        success: (res) => {
	            resolve({result:res.data})
	        },
	        fail: (e) => {
	            reject(e)
	        }
	    })
	})
}
// 空气质量---废弃
function getAir(location) {
	return new Promise((resolve, reject) => {
	    uni.request({
	        url: air,
	        data: {
	            location:location,
	            key: QQ_MAP_KEY1,
	        },
	        success: (res) => {
	            resolve({result:res.data})
	        },
	        fail: (e) => {
	            reject(e)
	        }
	    })
	})
}
// 經緯度逆解析
function gelocation(obj) {
	return new Promise((resolve, reject) => {
	    uni.request({
	        url: "/api/geo/",
	        data: {
	          key: QQ_MAP_KEY3,
	          lat:obj.lat,
	          lng:obj.lng,
	          type:1
	        },
	        success: (res) => {
	            resolve({result:res.data})
	        },
	        fail: (e) => {
	            reject(e)
	        }
	    })
	})
}

export {
	getWeather,
	getFuture,
	getLift,
	getAir,
	gelocation
}